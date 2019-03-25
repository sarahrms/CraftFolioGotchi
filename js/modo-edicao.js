document.addEventListener("DOMContentLoaded", function(e) {
var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var widgets = document.querySelectorAll(".widgets");
  var dragDrop = document.querySelectorAll(".drag-drop");

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Edição"){
      botao_modo.innerHTML = "Modo Visualização";
		for (var i = 0; i < dragDrop.length; i++) {
			if (!dragDrop[i].classList.contains("exibir")) {
				dragDrop[i].style.display = "none";
			}
		}
		widgets[0].style.backgroundColor = "khaki";
		widgets[1].style.backgroundColor = "khaki";
    }else{
      botao_modo.innerHTML = "Modo Edição";
		for (var i = 0; i < dragDrop.length; i++) {
				dragDrop[i].style.display = "block";			
		}
		widgets[0].style.backgroundColor = "cornflowerblue"
		widgets[1].style.backgroundColor = "cornflowerblue"
    }

  });

});
