
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

    if (event.relatedTarget.classList.contains("texto")) {
        event.relatedTarget.innerHTML = '<input type="text">'
    }else if (event.relatedTarget.classList.contains("foto")) {
      openModal("Imagem","Url da imagem:", event.relatedTarget);
    }else if (event.relatedTarget.classList.contains("video")) {
        event.relatedTarget.innerHTML = '<video>  </video>'
    }else if (event.relatedTarget.classList.contains("musica")) {
          event.relatedTarget.innerHTML = '<audio>  </audio>'
    }else if (event.relatedTarget.classList.contains("gif")) {
        event.relatedTarget.innerHTML = ''
    }else if (event.relatedTarget.classList.contains("poligono")) {
        event.relatedTarget.innerHTML = ''
    }
  }
});

interact('.resize')
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    modifiers: [
      interact.modifiers.restrictEdges({
        outer: 'parent',
        endOnly: true,
      }),
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 },
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


function openModal(titulo,texto,target){
  var modal= document.querySelector('.modal');
  var instance = M.Modal.init(modal, {onCloseEnd: onModalClose(target)});
  var modal_titulo = document.querySelector("#modal-1 > div.modal-content > h4");
  var modal_texto = document.querySelector("#modal-1 > div.modal-content > p");
  modal_titulo.innerHTML = titulo;
  modal_texto.innerHTML = texto;
  instance.open();
}

function onModalClose(target){
  var modal_url = document.querySelector("#modal-1 > div.modal-content > input");
  var botao = document.querySelector("#modal-1 > div.modal-footer > a");
  var id = target.id;
  botao.addEventListener('click', function(e){
    var widget = document.querySelector("#"+id);
    widget.innerHTML = '<img class="dentro" src="Sprites\\alien_blue\\'+modal_url.value+'.png">';
  });
}
