document.addEventListener("DOMContentLoaded", function(e) {
	var logar = document.querySelector("#logar");
  var cadastrar = document.querySelector("#cadastrar");
  var botao_quer_cadastrar = document.querySelector("#quer-cadastrar > button");
  var botao_tem_cadastro = document.querySelector("#tem-cadastro > button");

  botao_quer_cadastrar.addEventListener('click', function(e){
    logar.classList.remove("exibir");
    cadastrar.classList.remove("nao-exibir");
    logar.classList.add("nao-exibir");
    cadastrar.classList.add("exibir");
  });

  botao_tem_cadastro.addEventListener('click', function(e){
    cadastrar.classList.remove("exibir");
    logar.classList.remove("nao-exibir");
    cadastrar.classList.add("nao-exibir");
    logar.classList.add("exibir");
  });

});
