document.addEventListener("DOMContentLoaded", function(e) {
var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var widgets = document.querySelector("#widgets");
  var dragDrop = document.querySelectorAll(".drag-drop");

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Edição"){
      botao_modo.innerHTML = "Modo Visualização";
		for (var i = 0; i < dragDrop.length; i++) {
			localStorage.setItem("dragDrop_"+i+"_transform",dragDrop[i].style.transform);
			localStorage.setItem("dragDrop_"+i+"_classList",dragDrop[i].classList);
			localStorage.setItem("dragDrop_"+i+"_height",dragDrop[i].style.height);
			localStorage.setItem("dragDrop_"+i+"_width",dragDrop[i].style.width);
			localStorage.setItem("dragDrop_"+i+"_innerHTML",dragDrop[i].innerHTML);
      
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
