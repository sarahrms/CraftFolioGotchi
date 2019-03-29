document.addEventListener("DOMContentLoaded", function(e) {
  var dragDrop = document.querySelectorAll(".drag-drop");
  var propriedades = document.querySelector("#propriedades");
  var dropzone = document.querySelector("#inner-dropzone");
  var botao = document.querySelectorAll(".botao-propriedades");

	for (var i = 0; i < dragDrop.length; i++) {
      	dragDrop[i].addEventListener('click', function(e){
	      	if (this.classList.contains("texto")) {
		    }else if (this.classList.contains("imagem")) {

		    	propriedades.innerHTML='<form>'+
		    	'<input type="hidden" name="id" value="'+this.id+'">'+
				'<label for="url" >URL:</label>'+
				'<input id="url" type="text"  name="url">'+
				'<label for="altura">Altura:</label>'+
				'<input id="altura" type="password" name="altura">'+
				'<label for="largura">Largura:</label>'+
				'<input id="largura" type="password" name="largura">'+
				'<button type="submit" class="botao-propriedades">Alterar</button>'+
				'</form>';
		        
		    }else if (this.classList.contains("video")) {
		        
		    }else if (this.classList.contains("musica")) {

		    }

      	});

	}

	for (var i = 0; i < botao.length; i++) {
      	botao[i].addEventListener('click', function(e){
	    	var id = document.querySelector("#propriedades > form > input[type='hidden']:nth-child(1)").value;
	    	var objeto =  document.querySelector("#"+id);
	    	console.log(id);

      	});
	}

	dropzone.addEventListener('click', function(e){
  		propriedades.innerHTML = "NÃO SELECIONADO";
  	});

});
