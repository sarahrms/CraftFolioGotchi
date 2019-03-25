document.addEventListener("DOMContentLoaded", function(e) {
	var botao_modo = document.querySelector("#modo-exibicao");
  var mundo = document.querySelector("#mundo");
  var widgets = document.querySelector("#widgets");

  botao_modo.addEventListener('click', function(e){
    if(botao_modo.innerHTML == "Modo Edição"){
      botao_modo.innerHTML = "Modo Visualização";
			widgets.classList.remove("nao-exibir");
			widgets.classList.add("exibir");
			widgets.style.flex="1 1 auto";
			mundo.style.flex="1 0 auto";
    }else{
      botao_modo.innerHTML = "Modo Edição";
			widgets.classList.remove("exibir");
			widgets.classList.add("nao-exibir");
			widgets.style.flex="none";
			mundo.style.flex="none";
    }

  });

});
