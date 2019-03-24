document.addEventListener("DOMContentLoaded", function(e) {
	var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector(".centralizador");

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Edição"){
      mundo.style.marginLeft = "50%";
      botao_modo.innerHTML = "Modo Visualização";
    }else{
      mundo.style.marginLeft = "0%";
      botao_modo.innerHTML = "Modo Edição";
    }

  });

});
