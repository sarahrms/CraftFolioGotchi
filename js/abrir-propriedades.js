document.addEventListener("DOMContentLoaded", function(e) {
  var objeto = document.querySelectorAll(".resize-drag");
  var propriedades = document.querySelector("#propriedades");
  var mundo = document.querySelector("#mundo");
  var formulario = document.querySelector("#formulario-propriedades");
  var excluir = document.querySelector("#excluir");
  var alterar = document.querySelector("#alterar");
  var fora = document.querySelector("#fora");

	for (var i = 0; i < objeto.length; i++) {
      	objeto[i].addEventListener('click', function(e){
      		e.stopPropagation();
	      	var id = this.id
	      	var valor_id = document.querySelector("#formulario-propriedades > input[name='id']");	

	      	if(valor_id	== null ||  valor_id.value != id){
	      		if(id.startsWith("imagem")){
	      			var input_id = document.createElement("input");
	      			input_id.name="id";
	      			input_id.value	= this.id;
	      			input_id.classList.add("nao-exibir");
	      			formulario.insertBefore(input_id,alterar);

	      			var label_url = document.createElement("label");
	      			label_url.for="url";
	      			label_url.innerHTML	="URL";
	      			formulario.insertBefore(label_url,formulario.alterar);

	      			var input_url = document.createElement("input");
	      			input_url.name="url";
	      			input_url.type="text";
	      			formulario.insertBefore(input_url,formulario.alterar);

	      			var label_arredondar = document.createElement("label");
	      			label_arredondar.for="arredondar";
	      			label_arredondar.innerHTML	="Arredondar";
	      			formulario.insertBefore(label_arredondar,formulario.alterar);

	      			var input_arredondar = document.createElement("input");
	      			input_arredondar.name="arredondar";
	      			input_arredondar.type="number";
	      			input_arredondar.min="0";
	      			formulario.insertBefore(input_arredondar,formulario.alterar);

	      			excluir.classList.remove("nao-exibir");
	      			alterar.classList.remove("nao-exibir");

			    }
			}
      	});
	}

  	
	/*mundo.addEventListener('click', function(e){
  		propriedades.innerHTML='<form>'+
		    	'<input type="hidden" name="id" value="'+this.id+'">'+
				'<label for="cor" >Cor de fundo:</label>'+
				'<input id="cor" type="color"  name="cor">'+
				'<button id="alterar" type="submit" class="botao-propriedades">Alterar</button>'; 
  	});*/

  	formulario.addEventListener('submit', function(e){
  		event.preventDefault();
    	var id = document.querySelector("#formulario-propriedades > input.nao-exibir").value;
    	if(id.startsWith("imagem")){
	    	var url = document.querySelector("#formulario-propriedades > input[name='url']").value;
	    	var arredondar = document.querySelector("#formulario-propriedades > input[name='arredondar']").value;
	    	var obj = document.querySelector("#"+id);

	    	if(url!="") obj.src=url;
	    	obj.style.borderRadius=arredondar+"px";
	    	console.log(url);
    	}
  	});

  	excluir.addEventListener('click', function(e){
    	console.log("EXCLUIR");
  	});
});
