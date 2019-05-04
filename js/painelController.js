import {recuperarDados} from "./modules/recuperarDados.js";
import {salvarDadosPortifolio, salvarDadosCena} from "./modules/salvarDados.js";
import {initGaleria} from "./modules/galeria.js"; //proximaImgemDireita,proximaImgemEsquerda
import {criaObjetoImagem, criaObjetoVideo, criaObjetoMusica, criaObjetoTexto, criaObjetoGaleria} from "./modules/elemento.js";
import {updateCharacterColor} from "./sceneController.js";

let Dados = recuperarDados();


if(Dados.myPage){
	initGaleria();
	let formulario = document.querySelector("#formulario-propriedades");
	let excluir = document.querySelector("#excluir");
	let alterar = document.querySelector("#alterar");
	let botao_modo = document.querySelector("#computer");

	botao_modo.addEventListener('click', function(e){
		let conteiner_widgets = document.querySelector("#widgets");
		let objeto = document.querySelectorAll(".objeto");
		
	    if(botao_modo.getAttribute("data-value") == "Salvar"){
	    	botao_modo.setAttribute("data-value","Editar");		
			formulario.style.visibility = "hidden";
			conteiner_widgets.style.visibility = "hidden";
			propriedades.style.backgroundColor = "khaki";		
	    	salvarDadosPortifolio(Dados);		
	    }
	    else{
	      	botao_modo.setAttribute("data-value","Salvar");
			for(let widget of conteiner_widgets.children) {
					widget.style.display = "flex";
			}

			for (let i = 0; i < objeto.length; i++) {
				objeto[i].classList.add("resize-drag");
				if(objeto[i].id.startsWith("video")) objeto[i].firstChild.style.pointerEvents = "auto";
				if(objeto[i].id.startsWith("musica")) objeto[i].firstChild.style.pointerEvents = "auto";
			}
			formulario.style.visibility = "visible";
			conteiner_widgets.style.visibility = "visible";
	    }
	});

	let seletor_cor_alien = document.querySelector("#alien_color_selector");
	let opcoes_cor = seletor_cor_alien.children[1].children;
	for(let opc of opcoes_cor){
		opc.addEventListener("click", function(){
			if(Dados.myPage && seletor_cor_alien.getAttribute("data-value") == "enabled"){
				let color = opc.getAttribute("data-value");
				Dados.userColor = color;
				updateCharacterColor(color);
			}
		});
	}

	let wardrobe =document.querySelector("#wardrobe"); 

	wardrobe.addEventListener("click", function(e){
		if(seletor_cor_alien.getAttribute("data-value") == "disabled"){
	    	seletor_cor_alien.setAttribute("data-value","enabled");	
	    	seletor_cor_alien.style.visibility = "visible";
	    }
	    else if(seletor_cor_alien.getAttribute("data-value") == "enabled"){
	    	seletor_cor_alien.setAttribute("data-value","disabled");
	    	seletor_cor_alien.style.visibility = "hidden";
	    	salvarDadosCena(Dados);
	    }
	});



	//ABRE MODAL
	let widgets = document.getElementsByClassName("widgets");
	for (let i = 0; i < widgets.length; i++) {
	    widgets[i].addEventListener('click', function(e){
	        if(this.id == "texto"){
	            num_textos++;
	            criaObjetoTexto(num_textos);
	            
	        }
	        else{
	          let modal_titulo = document.querySelector("#modal > div > h4");
	          let input_galeria = document.querySelector(".input");
	          let input_outros = document.querySelector("#modal > div > form > input");
	          if(this.id == "galeria"){
	            input_outros.style.display = "none";
	            input_galeria.style.display = "block";
	          }
	          else{
	            input_outros.style.display = "block";
	            input_galeria.style.display = "none";
	          }
	          modal_titulo.innerHTML = this.id.toUpperCase();
	          modal.style.display = "block";
	        }
	    });
	}

	//AÇÕES NA MODAL
	let botao_modal_ok = document.querySelector("#ok");
	let botao_modal_cancelar = document.querySelector("#cancelar");
	let modal = document.querySelector("#modal");

	botao_modal_ok.addEventListener('click', function(event){
	  let modal_titulo = document.querySelector("#modal > div > h4");
	  let x=1;
	  event.preventDefault();
	  modal.style.display = "none";

	  switch(modal_titulo.innerHTML.toLowerCase()){
	    case "imagem":
	        num_imagens++;
	        criaObjetoImagem(num_imagens);
	        break;

	    case "video":
	        num_videos++;
	        criaObjetoVideo(num_videos);
	        break;

	    case "musica":
	        num_musicas++;
	        criaObjetoMusica(num_musicas);
	        break;

	    case "galeria":
	        num_galerias++;
	        criaObjetoGaleria(num_galerias);
	        break;

	    }
	});

	botao_modal_cancelar.addEventListener('click', function(event){
	  modal.style.display = "none";
	});
}