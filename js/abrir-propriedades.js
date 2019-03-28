document.addEventListener("DOMContentLoaded", function(e) {
  var dragDrop = document.querySelectorAll(".drag-drop");
  var propriedades = document.querySelector("#propriedades");
  var dropzone = document.querySelector("#inner-dropzone");

	for (var i = 0; i < dragDrop.length; i++) {
      	dragDrop[i].addEventListener('click', function(e){
	      	if (this.classList.contains("texto")) {
		    }else if (this.classList.contains("imagem")) {

		    	propriedades.innerHTML='<form>'+
				'<label for="url" >URL:</label>'+
				'<input id="url" type="text"  name="url">'+
				'<label for="altura">Altura:</label>'+
				'<input id="altura" type="password" name="altura">'+
				'<label for="largura">Largura:</label>'+
				'<input id="largura" type="password" name="largura">'+
				'<button type="submit" >Alterar</button>'+
				'</form>';
		        
		    }else if (this.classList.contains("video")) {
		        
		    }else if (this.classList.contains("musica")) {

		    }

      	});

	}

	dropzone.addEventListener('click', function(e){
  		propriedades.innerHTML = "NÃO SELECIONADO";
  	});

});
