document.addEventListener("DOMContentLoaded", function(e) {
var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var widgets = document.querySelector("#widgets");
  var propriedades = document.querySelector("#propriedades");
  var dragDrop = document.querySelectorAll(".drag-drop");

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Visualização"){
      botao_modo.innerHTML = "Modo Edição";
		for (var i = 0; i < dragDrop.length; i++) {
			localStorage.setItem("dragDrop_"+dragDrop[i].id+"_transform",dragDrop[i].style.transform);
			localStorage.setItem("dragDrop_"+dragDrop[i].id+"_classList",dragDrop[i].classList);
			localStorage.setItem("dragDrop_"+dragDrop[i].id+"_height",dragDrop[i].style.height);
			localStorage.setItem("dragDrop_"+dragDrop[i].id+"_width",dragDrop[i].style.width);
			//localStorage.setItem("dragDrop_"+dragDrop[i].id+"_outerHTML",dragDrop[i].outerHTML);
      
			if (!dragDrop[i].classList.contains("exibir")) {
				dragDrop[i].style.display = "none";
			}
		}
		widgets.style.backgroundColor = "khaki";
		propriedades.style.backgroundColor = "khaki";
    }else{
      botao_modo.innerHTML = "Modo Visualização";
		for (var i = 0; i < dragDrop.length; i++) {
				dragDrop[i].style.display = "block";
		}
		widgets.style.backgroundColor = "cornflowerblue"
		propriedades.style.backgroundColor = "lightgreen"
    }

  });

});
