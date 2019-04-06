document.addEventListener("DOMContentLoaded", function(e) {
var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var conteiner_widgets = document.querySelector("#widgets");
  var propriedades = document.querySelector("#propriedades");
  var widget = document.querySelectorAll(".widget");
  var formulario = document.querySelector("#formulario-propriedades");

  botao_modo.addEventListener('click', function(e){
  	var objeto = document.querySelectorAll(".objeto");
    if(botao_modo.innerHTML == "Sair"){
      	botao_modo.innerHTML = "Editar";
		for (var i = 0; i < widget.length; i++) {
				widget[i].style.display = "none";
		}
		for (var i = 0; i < objeto.length; i++) {
			objeto[i].innerHTML	= objeto[i].value;
			objeto[i].classList.remove("resize-drag")
			localStorage.setItem(objeto[i].id+"_html",objeto[i].outerHTML);
		}

		conteiner_widgets.style.backgroundColor = "khaki";
		propriedades.style.backgroundColor = "khaki";
		formulario.style.display = "none";
    }else{
      botao_modo.innerHTML = "Sair";
		for (var i = 0; i < widget.length; i++) {
				widget[i].style.display = "flex";
		}

		for (var i = 0; i < objeto.length; i++) {
			objeto[i].classList.add("resize-drag");
		}
		formulario.style.display = "block";
		conteiner_widgets.style.backgroundColor = "cornflowerblue"
		propriedades.style.backgroundColor = "lightgreen"
    }

  });

});
