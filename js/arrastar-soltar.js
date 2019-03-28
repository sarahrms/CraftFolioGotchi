//------------------------------------------------------------------------------
//DRAG AND DROP
interact('.dropzone').dropzone({
  overlap: 0.75,

  ondropactivate: function (event) {
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    dropzoneElement.classList.add('drop-target')
  },
  ondragleave: function (event) {
    event.target.classList.remove('drop-target')
    event.relatedTarget.textContent = 'Dragged out'
    event.relatedTarget.classList.remove('resize')
    event.relatedTarget.classList.remove('exibir')
  },
  ondrop: function (event) {
    event.relatedTarget.classList.add('exibir')
    event.relatedTarget.classList.add('resize')

  },
  ondropdeactivate: function (event) {
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')

    if(localStorage.getItem("dragDrop_"+event.relatedTarget.id+"_criado")!="sim"){
      if (event.relatedTarget.classList.contains("texto")) {
            event.relatedTarget.innerHTML = '<textarea class="resize-drag"></textarea>'
      }else if (event.relatedTarget.classList.contains("imagem")) {
          openModal(event.relatedTarget,"Imagem","URL da imagem:", '<img class="resize-drag" src="','">');
      }else if (event.relatedTarget.classList.contains("video")) {
          openModal(event.relatedTarget,"Video","URL do video:", '<video class="resize-drag" controls><source src="','"></video>');
          '<video class="resize-drag" controls><source src="'+modal_url.value+'"></video>'
      }else if (event.relatedTarget.classList.contains("musica")) {
        openModal(event.relatedTarget,"Musica","URL da musica:", '<audio class="resize-drag" controls><source src="','"></audio>');
      }
      localStorage.setItem("dragDrop_"+event.relatedTarget.id+"_criado","sim");
    }
  }
});
//------------------------------------------------------------------------------
//RESIZE
interact('.resize')
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    modifiers: [
      interact.modifiers.restrictEdges({
        outer: 'parent',
        endOnly: true,
      }),

    ],

    inertia: true
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });

//------------------------------------------------------------------------------
//DRAG AND DROP
interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrict({
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      })
    ],
    autoScroll: true,
    onmove: dragMoveListener
  });

//------------------------------------------------------------------------------
//FUNÇÕES
function dragMoveListener (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}


//Sprites\alien_blue\blue__0016_run_5.png
//Sprites\alien_blue\blue__0026_dead_5.png
function openModal(target,titulo,texto,innerHTML_inicio, innnerHTML_final){
  var modal= document.querySelector('.modal');
  var modal_titulo= document.querySelector('.modal > div.modal-content > h4');
  var modal_texto= document.querySelector('.modal > div.modal-content > p');

  modal_titulo.innerHTML=titulo;
  modal_texto.innerHTML=texto;

  var instance = M.Modal.init(modal, {onCloseEnd:
      function (event){
        var modal_url = document.querySelector(".modal > div.modal-content > input[type='text']");
        var botao = document.querySelector("#modal-close");
        console.log(modal_url.value);
        console.log(target.id);
        target.innerHTML = innerHTML_inicio+modal_url.value+innnerHTML_final;
      }
  });
  instance.open();
}
