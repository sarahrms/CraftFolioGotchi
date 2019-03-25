document.addEventListener("DOMContentLoaded", function(e) {
var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var widgets = document.querySelectorAll(".widgets");
  var dragDrop = document.querySelectorAll(".drag-drop");

	for (var i = 0; i < dragDrop.length; i++) {
		var aux_transform = localStorage.getItem("dragDrop_"+i+"_transform");
		var aux_classList = localStorage.getItem("dragDrop_"+i+"_classList");
		if (aux_transform!=null) {
			dragDrop[i].style.transform = aux_transform;
		}
		if (aux_classList!=null) {
			dragDrop[i].classList = aux_classList;
		}

	}

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Edição"){
      botao_modo.innerHTML = "Modo Visualização";
		for (var i = 0; i < dragDrop.length; i++) {
			localStorage.setItem("dragDrop_"+i+"_transform",dragDrop[i].style.transform);
			localStorage.setItem("dragDrop_"+i+"_classList",dragDrop[i].classList);
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
