document.addEventListener("DOMContentLoaded", function(e) {
	var ir_esquerda = document.querySelector("#seta-esquerda");
  var ir_direita = document.querySelector("#seta-direita");
  var faces = document.querySelector(".box-faces");
	var localizacao = document.querySelector("#localizacao");

  ir_esquerda.addEventListener('click', function(e){
		console.log("entrou");
		if(localizacao.innerHTML=="DIREITO"){
				faces.style.animationName="spin-direito";
				faces.style.animationDirection="reverse";
				localizacao.innerHTML="CENTRO";
		}else{
			faces.style.animationName="spin-esquerdo";
			faces.style.animationDirection="normal";
			localizacao.innerHTML="ESQUERDA";
		}
		faces.style.animationDuration="5s";
		faces.style.animationFillMode="forwards";
  });

  ir_direita.addEventListener('click', function(e){
		if(localizacao.innerHTML=="ESQUERDA"){
			faces.style.animationName="spin-esquerdo";
			faces.style.animationDirection="reverse";
			localizacao.innerHTML="CENTRO";
		}else{
			faces.style.animationName="spin-direito";
			faces.style.animationDirection="normal";
			localizacao.innerHTML="DIREITO";
		}
		faces.style.animationDuration="5s";
		faces.style.animationFillMode="forwards";

  });

});
