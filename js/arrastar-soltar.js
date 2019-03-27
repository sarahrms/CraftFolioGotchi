
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
          event.relatedTarget.innerHTML = '<textarea class="resize-drag"></textarea>'
    }else if (event.relatedTarget.classList.contains("imagem")) {
        openModalImage(event.relatedTarget);
    }else if (event.relatedTarget.classList.contains("video")) {
        openModalVideo(event.relatedTarget);
    }else if (event.relatedTarget.classList.contains("musica")) {
        openModalMusica(event.relatedTarget);
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


//Sprites\alien_blue\blue__0016_run_5.png
//Sprites\alien_blue\blue__0026_dead_5.png
function openModalImage(target){
  var modal= document.querySelector('#modal-imagem');
  var instance = M.Modal.init(modal, {onCloseEnd: 
      function (event){
        var modal_url = document.querySelector("#modal-imagem > div.modal-content > input[type='text']");
        var botao = document.querySelector("#modal-close");
        console.log(modal_url.value);
        console.log(target.id);
        target.innerHTML = '<img class="resize-drag" src="'+modal_url.value+'">';
      }
  });
  instance.open();
}

function openModalVideo(target){
  var modal= document.querySelector('#modal-video');
  var instance = M.Modal.init(modal, {onCloseEnd: 
      function (event){
        var modal_url = document.querySelector("#modal-video > div.modal-content > input[type='text']");
        var botao = document.querySelector("#modal-close-video");
        console.log(modal_url.value);
        console.log(target.id);
        target.innerHTML = '<video class="resize-drag" controls><source src="'+modal_url.value+'"></video>';
      }
  });
  instance.open();
}

function openModalMusica(target){
  var modal= document.querySelector('#modal-musica');
  var instance = M.Modal.init(modal, {onCloseEnd: 
      function (event){
        var modal_url = document.querySelector("#modal-musica > div.modal-content > input[type='text']");
        var botao = document.querySelector("#modal-close-musica");
        console.log(modal_url.value);
        console.log(target.id);
        target.innerHTML = '<audio class="resize-drag" controls><source src="'+modal_url.value+'"></audio>';
      }
  });
  instance.open();
}