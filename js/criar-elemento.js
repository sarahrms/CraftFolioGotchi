document.addEventListener("DOMContentLoaded", function(e) {
  var imagem = document.querySelector("#imagem");
  var video = document.querySelector("#video");
  var musica = document.querySelector("#musica");
  var texto = document.querySelector("#texto");
  var formulario_imagem = document.querySelector("#modal-imagem > div > form");
  var formulario_video = document.querySelector("#modal-video > div > form");
  var formulario_musica = document.querySelector("#modal-musica > div > form");

  imagem.addEventListener('click', function(e){
    var modal= document.querySelector("#modal-imagem");
    modal.style.display = "block";
  });

  video.addEventListener('click', function(e){
    var modal= document.querySelector("#modal-video");
    modal.style.display = "block";
  });

  musica.addEventListener('click', function(e){
    var modal= document.querySelector("#modal-musica");
    modal.style.display = "block";
  });

  texto.addEventListener('click', function(e){
    var mundo = document.querySelector("#mundo");
    var objeto = document.createElement("textarea");
    var x=1;

    if(localStorage.getItem("num_textos")!=null){
      x=Number(localStorage.getItem("num_textos"))+1;
    }
    localStorage.setItem("num_textos",x);
    objeto.classList.add("resize-drag");
    objeto.id="texto-"+x;
    objeto.style.width="100px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
  });

  formulario_imagem.addEventListener('submit', function(event){
        var modal= document.querySelector("#modal-imagem");
        var mundo = document.querySelector("#mundo");
        var x=1;

        event.preventDefault();
        modal.style.display = "none";
       
        if(localStorage.getItem("num_imagens")!=null){
          x=Number(localStorage.getItem("num_imagens"))+1;
        }
        localStorage.setItem("num_imagens",x);

        var objeto = document.createElement("img");
        objeto.classList.add("resize-drag");
        objeto.id="imagem-"+x;
        objeto.src=document.querySelector("#modal-imagem > div > form > input").value;
        objeto.style.width="100px";
        objeto.style.height="100px";
        mundo.appendChild(objeto);
        
        
  });

  formulario_video.addEventListener('submit', function(event){
        var modal= document.querySelector("#modal-video");
        var mundo = document.querySelector("#mundo");
        var x=1;

        event.preventDefault();
        modal.style.display = "none";
       
        if(localStorage.getItem("num_videos")!=null){
          x=Number(localStorage.getItem("num_videos"))+1;
        }
        localStorage.setItem("num_videos",x);

        var objeto = document.createElement("video");
        objeto.classList.add("resize-drag");
        objeto.id="video-"+x;
        objeto.src=document.querySelector("#modal-video > div > form > input").value;
        objeto.controls = true;
        objeto.style.width="100px";
        objeto.style.height="100px";
        mundo.appendChild(objeto);
        
  });


formulario_musica.addEventListener('submit', function(event){
        var modal= document.querySelector("#modal-musica");
        var mundo = document.querySelector("#mundo");
        var x=1;

        event.preventDefault();
        modal.style.display = "none";
       
        if(localStorage.getItem("num_musicas")!=null){
          x=Number(localStorage.getItem("num_musicas"))+1;
        }
        localStorage.setItem("num_musicas",x);

        var objeto = document.createElement("audio");
        objeto.classList.add("resize-drag");
        objeto.id="musica-"+x;
        objeto.src=document.querySelector("#modal-musica > div > form > input").value;
        objeto.controls = true;
        objeto.style.width="100px";
        objeto.style.height="100px";
        mundo.appendChild(objeto);
  });


});