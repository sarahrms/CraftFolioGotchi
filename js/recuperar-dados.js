document.addEventListener("DOMContentLoaded", function(e) {
  	var objeto = document.querySelectorAll(".resize-drag");
  	var mundo = document.querySelector("#mundo");
    var chao = document.querySelector("#chao");
  	var num_imagens = localStorage.getItem("num_imagens");
  	var num_textos = localStorage.getItem("num_textos");
  	var num_videos = localStorage.getItem("num_videos");
  	var num_musicas = localStorage.getItem("num_musicas");


    if(localStorage.getItem("mundo_backgroundColor")!=null){
      console.log(localStorage.getItem("mundo_backgroundColor"))
      mundo.style.backgroundColor = localStorage.getItem("mundo_backgroundColor");
    }

    if(localStorage.getItem("chao_backgroundColor")!=null)
      chao.style.backgroundColor = localStorage.getItem("chao_backgroundColor");

    for (var i = 1; i <= Number(num_imagens); i++) {
      	var objeto = document.createElement("img");
      	mundo.appendChild(objeto);
      	objeto.outerHTML = localStorage.getItem("imagem-"+i+"_html");
  	}
  	for (var i = 1; i <= Number(num_textos); i++) {
      	var objeto = document.createElement("textarea");
      	mundo.appendChild(objeto);
      	objeto.outerHTML = localStorage.getItem("texto-"+i+"_html");
  	}
  	for (var i = 1; i <= Number(num_videos); i++) {
      	var objeto = document.createElement("video");
      	mundo.appendChild(objeto);
      	objeto.outerHTML = localStorage.getItem("video-"+i+"_html");
  	}
  	for (var i = 1; i <= Number(num_musicas); i++) {
      	var objeto = document.createElement("audio");
      	mundo.appendChild(objeto);
      	objeto.outerHTML = localStorage.getItem("musica-"+i+"_html");
  	}  
});
