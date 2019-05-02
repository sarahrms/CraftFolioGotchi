import * from "./modules/recuperarDados.js";
import * from "./modules/salvarDados.js";
import * from "./modules/galeira.js";


recuperarDados();
initGaleria();

let botao_modo = document.querySelector("#computer");

botao_modo.addEventListener('click', function(e){
	let conteiner_widgets = document.querySelector("#widgets");
	let objeto = document.querySelectorAll(".objeto");
	
    if(botao_modo.getAttribute("data-value") == "Salvar"){
    	botao_modo.setAttribute("data-value","Editar");		
    	salvarDadosPortifolio();
		formulario.style.visibility = "hidden";
		conteiner_widgets.style.visibility = "hidden";
		propriedades.style.backgroundColor = "khaki";
		
    }
    else{
      	botao_modo.setAttribute("data-value","Salvar");
		for (let i = 0; i < widget.length; i++) {
				widget[i].style.display = "flex";
		}

		for (let i = 0; i < objeto.length; i++) {
			objeto[i].classList.add("resize-drag");
			if(objeto[i].id.startsWith("video")) objeto[i].firstChild.style.pointerEvents = "auto";
			if(objeto[i].id.startsWith("musica")) objeto[i].firstChild.style.pointerEvents = "auto";
		}
		formulario.style.display = "block";
		conteiner_widgets.style.visibility = "visible";
    }

});

seletor_cor_alien = document.querySelector("#alien_color_selector");
wardrobe =document.querySelector("#wardrobe"); 

wardrobe.addEventListener('click', function(e){
	if(wardrobe.getAttribute("data-value") == "disabled"){
    	wardrobe.setAttribute("data-value","enabled");	

    	wardrobe.style.visibility = "visible";


    }
    else if(wardrobe.getAttribute("data-value") == "enabled"){
    	wardrobe.setAttribute("data-value","disabled");	


    	wardrobe.style.visibility = "hidden";
    }
}

