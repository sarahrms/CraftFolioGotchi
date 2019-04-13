window.addEventListener("DOMContentLoaded", function(e) {
  var objeto = document.querySelectorAll(".objeto");
  var propriedades = document.querySelector("#propriedades");
  var mundo = document.querySelector("#mundo");
  var formulario = document.querySelector("#formulario-propriedades");
  var excluir = document.querySelector("#excluir");
  var alterar = document.querySelector("#alterar");
  var fora = document.querySelector("#fora");
  var chao = document.querySelector("#chao");


  	/*fora.addEventListener('click', function(e){
  		console.log("ENTROU");
    	var no = document.querySelector("#formulario-propriedades").firstElementChild;
	    e.stopPropagation();  		
		while (no.tagName!="BUTTON") {
			var x = no;
		    no = no.nextElementSibling;
		    formulario.removeChild(x);
		}

		excluir.classList.add("nao-exibir");
	    alterar.classList.add("nao-exibir");
  	});*/

  	function rgb2hex(rgb) {
	    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	    function hex(x) {
	        return ("0" + parseInt(x).toString(16)).slice(-2);
	    }
	    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}

  	var handler_mundo = function(e){
  		var no = document.querySelector("#formulario-propriedades").firstElementChild;
	    e.stopPropagation();  		
		while (no.tagName!="BUTTON") {
			var x = no;
		    no = no.nextElementSibling;
		    formulario.removeChild(x);
		}
		var obj = document.querySelector("#"+this.id);
		let compStyles = window.getComputedStyle(obj);

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
		input_cor.value=rgb2hex(compStyles.getPropertyValue('background-color'));
		formulario.insertBefore(input_cor,formulario.alterar);

		alterar.classList.remove("nao-exibir");
		propriedades.style.backgroundColor = "lightgreen"
  	};

  	mundo.addEventListener('click', handler_mundo);
  	chao.addEventListener('click', handler_mundo);



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
      			input_url.value=this.src
      			formulario.insertBefore(input_url,formulario.alterar);

      			var label_arredondar = document.createElement("label");
      			label_arredondar.for="arredondar";
      			label_arredondar.innerHTML	="Arredondar";
      			formulario.insertBefore(label_arredondar,formulario.alterar);

      			var input_arredondar = document.createElement("input");
      			input_arredondar.name="arredondar";
      			input_arredondar.type="number";
      			input_arredondar.min="0";
      			input_arredondar.value = this.style.borderRadius.slice(0, -2);
      			formulario.insertBefore(input_arredondar,formulario.alterar);

      			var label_height = document.createElement("label");
      			label_height.for="altura";
      			label_height.innerHTML	="Altura";
      			formulario.insertBefore(label_height,formulario.alterar);

      			var input_height = document.createElement("input");
      			input_height.name="altura";
      			input_height.type="number";
      			input_height.min="0";
      			input_height.value = this.style.height.slice(0, -2);
      			formulario.insertBefore(input_height,formulario.alterar);

      			var label_width = document.createElement("label");
      			label_width.for="largura";
      			label_width.innerHTML	="Largura";
      			formulario.insertBefore(label_width,formulario.alterar);

      			var input_width = document.createElement("input");
      			input_width.name="largura";
      			input_width.type="number";
      			input_width.min="0";
      			input_width.value = this.style.width.slice(0, -2);
      			formulario.insertBefore(input_width,formulario.alterar);

      			excluir.classList.remove("nao-exibir");
      			alterar.classList.remove("nao-exibir");
      			propriedades.style.backgroundColor = "lightgreen"
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
	    	var altura = document.querySelector("#formulario-propriedades > input[name='altura']").value;
	    	var largura = document.querySelector("#formulario-propriedades > input[name='largura']").value;
	    	obj.src=url;
	    	obj.style.borderRadius=arredondar+"px";
	    	obj.style.height=altura+"px";
	    	obj.style.width=largura+"px";
    	}else if (id=="mundo" || id=="chao"){
    		var cor = document.querySelector("#formulario-propriedades > input[name='cor']").value;
    		obj.style.backgroundColor=cor;

    	}
  	});

  	excluir.addEventListener('click', function(e){
    	var id = document.querySelector("#formulario-propriedades > input.nao-exibir").value;
    	var obj = document.querySelector("#"+id);
    	localStorage.removeItem(id+"_html");
    	mundo.removeChild(obj);
  	});
});
