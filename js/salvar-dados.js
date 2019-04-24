let conteiner_widgets = document.querySelector("#widgets");

botao_modo.addEventListener('click', function(e){
  	let mundo = document.querySelector("#mundo");
  	let chao = document.querySelector("#chao");
  	let objeto = document.querySelectorAll(".objeto");

    if(botao_modo.getAttribute("data-value") == "Salvar"){
    	botao_modo.setAttribute("data-value","Editar");
		for (let i = 0; i < widget.length; i++) {
				widget[i].style.display = "none";
		}
		for (let i = 0; i < objeto.length; i++) {
			if(objeto[i].id.startsWith("texto")) objeto[i].innerHTML = objeto[i].value;
			objeto[i].classList.remove("resize-drag")
			localStorage.setItem(objeto[i].id+"_outerHTML",objeto[i].outerHTML);
			localStorage.setItem(objeto[i].id+"_innerHTML",objeto[i].innerHTML);
        }
        localStorage.setItem("galerias",JSON.stringify(galerias));
		let compStyles_mundo = window.getComputedStyle(mundo);
		let compStyles_chao = window.getComputedStyle(chao);

		localStorage.setItem("mundo_backgroundColor",compStyles_mundo.getPropertyValue('background-color'));
		localStorage.setItem("chao_backgroundColor",compStyles_chao.getPropertyValue('background-color'));

		localStorage.setItem("num_textos",num_textos);
		localStorage.setItem("num_imagens",num_imagens);
        localStorage.setItem("num_videos",num_videos);
        localStorage.setItem("num_musicas",num_musicas);
        localStorage.setItem("num_galerias",num_galerias);

		conteiner_widgets.style.backgroundColor = "khaki";
		propriedades.style.backgroundColor = "khaki";
		formulario.style.display = "none";
    }
    else{
      	botao_modo.setAttribute("data-value","Salvar");
		for (let i = 0; i < widget.length; i++) {
				widget[i].style.display = "flex";
		}

		for (let i = 0; i < objeto.length; i++) {
			objeto[i].classList.add("resize-drag");
		}
		formulario.style.display = "block";
		conteiner_widgets.style.backgroundColor = "cornflowerblue"
    }

  });
