document.addEventListener("DOMContentLoaded", function(e) {
  var dragDrop = document.querySelectorAll(".drag-drop");
  var propriedades = document.querySelector("#propriedades");
  var dropzone = document.querySelector("#mundo");
  var formulario = document.querySelector("#formulario-propriedades");
  var fora = document.querySelector("#fora");

	for (var i = 0; i < dragDrop.length; i++) {
      	dragDrop[i].addEventListener('click', function(e){
	      	if (this.classList.contains("texto")) {
		    }else{
		    	formulario.innerHTML=
		    	'<input type="hidden" name="id" value="'+this.id+'">'+
				'<label for="url" >URL:</label>'+
				'<input id="url" type="text"  name="url">'+
				'<label for="altura">Altura:</label>'+
				'<input id="altura" type="number" name="altura">'+
				'<label for="largura">Largura:</label>'+
				'<input id="largura" type="number" name="largura">'+
				'<button id="alterar" type="submit" class="botao-propriedades">Alterar</button>'+
				'<button id="excluir" type="submit" class="botao-propriedades">Excluir</button>';
		    }
      	});
	}

  	
	dropzone.addEventListener('click', function(e){
  		propriedades.innerHTML='<form>'+
		    	'<input type="hidden" name="id" value="'+this.id+'">'+
				'<label for="cor" >Cor de fundo:</label>'+
				'<input id="cor" type="color"  name="cor">'+
				'<button id="alterar" type="submit" class="botao-propriedades">Alterar</button>'+
				'</form>'; 
  	});

  	formulario.addEventListener('submit', function(e){
    	var id = document.querySelector("#propriedades > form > input[type='hidden']:nth-child(1)").value;
    	var altura = document.querySelector("#altura").value;
    	var largura = document.querySelector("#largura").value;
    	var url = document.querySelector("#url").value;
    	var objeto =  document.querySelector("#"+id);
    	objeto.style.widght = largura+"px";
    	objeto.style.hight = altura+"px";
  	});
});
