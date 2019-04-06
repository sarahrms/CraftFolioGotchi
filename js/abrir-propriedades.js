window.addEventListener("DOMContentLoaded", function(e) {
  var objeto = document.querySelectorAll(".objeto");
  var propriedades = document.querySelector("#propriedades");
  var mundo = document.querySelector("#mundo");
  var formulario = document.querySelector("#formulario-propriedades");
  var excluir = document.querySelector("#excluir");
  var alterar = document.querySelector("#alterar");
  var chao = document.querySelector("#chao");

  	mundo.addEventListener('click', function(e){
  		var no = document.querySelector("#formulario-propriedades").firstElementChild;
	      		
		while (no.tagName!="BUTTON") {
			var x = no;
		    no = no.nextElementSibling;
		    formulario.removeChild(x);
		}

		var input_id = document.createElement("input");
		input_id.name="id";
		input_id.value	= this.id;
		input_id.classList.add("nao-exibir");
		formulario.insertBefore(input_id,alterar);

		var label_cor = document.createElement("label");
		label_cor.for="cor";
		label_cor.innerHTML	="Cor";
		formulario.insertBefore(label_cor,formulario.alterar);

		var input_cor = document.createElement("input");
		input_cor.id="cor";
		input_cor.name="cor";
		input_cor.type="color";
		formulario.insertBefore(input_cor,formulario.alterar);

		alterar.classList.remove("nao-exibir");
  	});

  	chao.addEventListener('click', function(e){
  		var no = document.querySelector("#formulario-propriedades").firstElementChild;
	      		
		while (no.tagName!="BUTTON") {
			var x = no;
		    no = no.nextElementSibling;
		    formulario.removeChild(x);
		}

		var input_id = document.createElement("input");
		input_id.name="id";
		input_id.value	= this.id;
		input_id.classList.add("nao-exibir");
		formulario.insertBefore(input_id,alterar);

		var label_cor = document.createElement("label");
		label_cor.for="cor";
		label_cor.innerHTML	="Cor";
		formulario.insertBefore(label_cor,formulario.alterar);

		var input_cor = document.createElement("input");
		input_cor.id="cor";
		input_cor.name="cor";
		input_cor.type="color";
		formulario.insertBefore(input_cor,formulario.alterar);

		alterar.classList.remove("nao-exibir");
  	});

	for (var i = 0; i < objeto.length; i++) {
      	objeto[i].addEventListener('click', function(e){
      		e.stopPropagation();
	      	var id = this.id
	      		var no = document.querySelector("#formulario-propriedades").firstElementChild;
	      		
				while (no.tagName!="BUTTON") {
					var x = no;
				    no = no.nextElementSibling;
				    formulario.removeChild(x);
				}

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
      	});
	}

  
  	formulario.addEventListener('submit', function(e){
  		event.preventDefault();
    	var id = document.querySelector("#formulario-propriedades > input.nao-exibir").value;
    	var obj = document.querySelector("#"+id);
    	if(id.startsWith("imagem")){
	    	var url = document.querySelector("#formulario-propriedades > input[name='url']").value;
	    	var arredondar = document.querySelector("#formulario-propriedades > input[name='arredondar']").value;
	    	if(url!="") obj.src=url;
	    	obj.style.borderRadius=arredondar+"px";
    	}else if (id=="mundo" || id=="chao"){
    		var cor = document.querySelector("#formulario-propriedades > input[name='cor']").value;
    		obj.style.backgroundColor=cor;

    	}
  	});

  	excluir.addEventListener('click', function(e){
    	console.log("EXCLUIR");
  	});
});
