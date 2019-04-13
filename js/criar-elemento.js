document.addEventListener("DOMContentLoaded", function(e) {
  var modal = document.querySelector("#modal");
  var widget = document.querySelectorAll(".widget");
  var formulario = document.querySelector("#formulario-propriedades");

  for (var i = 0; i < widget.length; i++) {
    widget[i].addEventListener('click', function(e){
      if(this.id == "texto"){
        var mundo = document.querySelector("#mundo");
        var objeto = document.createElement("textarea");
        var x=1;

        if(localStorage.getItem("num_textos")!=null){
          x=Number(localStorage.getItem("num_textos"))+1;
        }
        localStorage.setItem("num_textos",x);
        objeto.classList.add("resize-drag");
        objeto.classList.add("objeto");
        objeto.id="texto-"+x;
        objeto.style.width="100px";
        objeto.style.height="100px";
        mundo.appendChild(objeto);
      }else{
          var modal_titulo = document.querySelector("#modal > div > h4");
          modal_titulo.innerHTML = this.id
          modal.style.display = "block";
      }
    });
  }

  var handler_propriedades = function(e){
    e.stopPropagation();
    var id = this.id
    var no = document.querySelector("#formulario-propriedades").firstElementChild;
        
    while (no.tagName!="BUTTON") {
      var x = no;
        no = no.nextElementSibling;
        formulario.removeChild(x);
    }

    if(id.startsWith("imagem")){
      var input_id = document.createElement("input");
      input_id.name="id";
      input_id.value  = this.id;
      input_id.classList.add("nao-exibir");
      formulario.insertBefore(input_id,alterar);

      var label_url = document.createElement("label");
      label_url.for="url";
      label_url.innerHTML ="URL";
      formulario.insertBefore(label_url,formulario.alterar);

      var input_url = document.createElement("input");
      input_url.name="url";
      input_url.type="text";
      formulario.insertBefore(input_url,formulario.alterar);

      var label_arredondar = document.createElement("label");
      label_arredondar.for="arredondar";
      label_arredondar.innerHTML  ="Arredondar";
      formulario.insertBefore(label_arredondar,formulario.alterar);

      var input_arredondar = document.createElement("input");
      input_arredondar.name="arredondar";
      input_arredondar.type="number";
      input_arredondar.min="0";
      formulario.insertBefore(input_arredondar,formulario.alterar);

      excluir.classList.remove("nao-exibir");
      alterar.classList.remove("nao-exibir");
    }
  }

  modal.addEventListener('submit', function(event){
        var mundo = document.querySelector("#mundo");
        var modal_titulo = document.querySelector("#modal > div > h4");
        var objeto;
        var x=1;
        event.preventDefault();
        modal.style.display = "none";

        switch(modal_titulo.innerHTML){
          case "imagem":
            if(localStorage.getItem("num_imagens")!=null){
              x=Number(localStorage.getItem("num_imagens"))+1;
            }
            localStorage.setItem("num_imagens",x);

            objeto = document.createElement("img");
            objeto.classList.add("resize-drag");
            objeto.id="imagem-"+x;
            objeto.classList.add("objeto");
            objeto.src=document.querySelector("#modal > div > form > input").value;
            objeto.style.width="100px";
            objeto.style.height="100px";
            break;

          case "video":
            if(localStorage.getItem("num_videos")!=null){
              x=Number(localStorage.getItem("num_videos"))+1;
            }
            localStorage.setItem("num_videos",x);

            objeto = document.createElement("video");
            objeto.classList.add("resize-drag");
            objeto.id="video-"+x;
            objeto.src=document.querySelector("#modal > div > form > input").value;
            objeto.controls = true;
            objeto.classList.add("objeto");
            objeto.style.width="100px";
            objeto.style.height="100px";
            break;

          case "musica":
            if(localStorage.getItem("num_musicas")!=null){
              x=Number(localStorage.getItem("num_musicas"))+1;
            }
            localStorage.setItem("num_musicas",x);

            objeto = document.createElement("audio");
            objeto.id="musica-"+x;
            objeto.src=document.querySelector("#modal-musica > div > form > input").value;
            objeto.controls = true;
            objeto.classList.add("objeto");
            objeto.style.width="100px";
            objeto.style.height="100px";
            break;
        }

        mundo.appendChild(objeto);
        objeto.addEventListener('click', handler_propriedades);
            
        
  });
});