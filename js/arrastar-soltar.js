// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.textContent = 'Dragged out'
    event.relatedTarget.classList.remove('resize')
    event.relatedTarget.classList.remove('exibir')
  },
  ondrop: function (event) {
  
    event.relatedTarget.classList.add('exibir')
    event.relatedTarget.classList.add('resize')

    if (event.relatedTarget.classList.contains("texto")) {
        event.relatedTarget.innerHTML = '<input type="text">'
    }else if (event.relatedTarget.classList.contains("foto")) {
       var elem= document.querySelector('.modal');
        var instance = M.Modal.init(elem);
        instance.open();
        event.relatedTarget.innerHTML = '<img class="dentro" src="Sprites\\alien_blue\\blue__0018_hurt_1.png">'
    }else if (event.relatedTarget.classList.contains("video")) {
        event.relatedTarget.innerHTML = '<video>  </video>'
    }else if (event.relatedTarget.classList.contains("musica")) {
          event.relatedTarget.innerHTML = '<audio>  </audio>'
    }else if (event.relatedTarget.classList.contains("gif")) {
        event.relatedTarget.innerHTML = ''
    }else if (event.relatedTarget.classList.contains("poligono")) {
        event.relatedTarget.innerHTML = ''
    }

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
});

interact('.resize')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent',
        endOnly: true,
      }),

      // minimum size
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

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
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
    // dragMoveListener from the dragging demo above
    onmove: dragMoveListener
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }


