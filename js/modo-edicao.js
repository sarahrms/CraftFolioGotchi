document.addEventListener("DOMContentLoaded", function(e) {
	var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Edição"){
      mundo.style.left = "25%";
      botao_modo.innerHTML = "Modo Visualização";
    }else{
      mundo.style.left = "0%";
      botao_modo.innerHTML = "Modo Edição";
    }

  });

});
