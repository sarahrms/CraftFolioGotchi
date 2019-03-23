document.addEventListener("DOMContentLoaded", function(e) {
	var ir_esquerda = document.querySelector("#seta-esquerda");
  var ir_direita = document.querySelector("#seta-direita");
  var faces = document.querySelector("#faces");

  ir_esquerda.addEventListener('click', function(e){
    faces.classList.add("girar-esquerda");
  });

  ir_direita.addEventListener('click', function(e){
    faces.classList.add("girar-direita");
  });

});
