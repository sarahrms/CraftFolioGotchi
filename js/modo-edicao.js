document.addEventListener("DOMContentLoaded", function(e) {
var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var widgets = document.querySelector("#widgets");
  var dragDrop = document.querySelectorAll(".drag-drop");

	for (var i = 0; i < dragDrop.length; i++) {
		var aux_transform = localStorage.getItem("dragDrop_"+i+"_transform");
		var aux_classList = localStorage.getItem("dragDrop_"+i+"_classList");
		var aux_height = localStorage.getItem("dragDrop_"+i+"_height");
		var aux_width = localStorage.getItem("dragDrop_"+i+"_width");
		if (aux_transform!=null) {
			dragDrop[i].style.transform = aux_transform;
		}
		if (aux_classList!=null) {
			dragDrop[i].classList = aux_classList;
		}
	    if (aux_height!=null) {
			dragDrop[i].style.height = aux_height;
		}
	    if (aux_width!=null) {
	      	dragDrop[i].style.width = aux_width;
	    }

	}

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Edição"){
      botao_modo.innerHTML = "Modo Visualização";
		for (var i = 0; i < dragDrop.length; i++) {
			localStorage.setItem("dragDrop_"+i+"_transform",dragDrop[i].style.transform);
			localStorage.setItem("dragDrop_"+i+"_classList",dragDrop[i].classList);
			localStorage.setItem("dragDrop_"+i+"_height",dragDrop[i].style.height);
			localStorage.setItem("dragDrop_"+i+"_width",dragDrop[i].style.width);
      
			if (!dragDrop[i].classList.contains("exibir")) {
				dragDrop[i].style.display = "none";
			}
		}
		widgets.style.backgroundColor = "khaki";
    }else{
      botao_modo.innerHTML = "Modo Edição";
		for (var i = 0; i < dragDrop.length; i++) {
				dragDrop[i].style.display = "block";
		}
		widgets.style.backgroundColor = "cornflowerblue"
    }

  });

});
