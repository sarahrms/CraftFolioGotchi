document.addEventListener("DOMContentLoaded", function(e) {
var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var widgets = document.querySelector("#widgets");
  var propriedades = document.querySelector("#propriedades");
  var dragDrop = document.querySelectorAll(".drag-drop");
  var formulario = document.querySelector("#formulario-propriedades");

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Sair"){
      	botao_modo.innerHTML = "Editar";
		for (var i = 0; i < dragDrop.length; i++) {
			if(localStorage.getItem(dragDrop[i].id+"_criado")=="sim"){
				localStorage.setItem(dragDrop[i].id+"_transform",dragDrop[i].style.transform);
				localStorage.setItem(dragDrop[i].id+"_classList",dragDrop[i].classList);
				localStorage.setItem(dragDrop[i].id+"_height",dragDrop[i].style.height);
				localStorage.setItem(dragDrop[i].id+"_width",dragDrop[i].style.width);
				localStorage.setItem(dragDrop[i].id+"_innerHTML",dragDrop[i].innerHTML);
			}else{
				dragDrop[i].style.display = "none";
			}
		}
		widgets.style.backgroundColor = "khaki";
		propriedades.style.backgroundColor = "khaki";
		formulario.style.display = "none";
    }else{
      botao_modo.innerHTML = "Sair";
		for (var i = 0; i < dragDrop.length; i++) {
				dragDrop[i].style.display = "block";
		}
		formulario.style.display = "block";
		widgets.style.backgroundColor = "cornflowerblue"
		propriedades.style.backgroundColor = "lightgreen"
    }

  });

});
