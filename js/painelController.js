import {setPageIcon, recuperarDadosPainel} from "./modules/recuperarDados.js";
import {salvarDadosPortifolio, salvarDadosCena} from "./modules/salvarDados.js";
import {initGaleria} from "./modules/galeria.js"; //proximaImgemDireita,proximaImgemEsquerda
import {criaObjetoImagem, criaObjetoVideo, criaObjetoMusica, criaObjetoTexto, criaObjetoGaleria} from "./modules/elemento.js";
import {updateCharacterColor} from "./sceneController.js";
import {criarPropriedades, lidaAlterar,lidaExcluir} from "./modules/propriedades.js"

let Dados = recuperarDadosPainel();

function setLayerSeletoresVisible(){
	let seletores = document.querySelector("#seletores");
	seletores.style.display = "block";

}

function setLayerSeletoresHidden(){
	let seletores = document.querySelector("#seletores");
	seletores.style.display = "none";
}

function setChaoOptions(){	
	let chao = document.querySelector("#chao"); 
	let botao_chao = document.querySelector("#botao_chao");
	let seletor_textura_chao = document.querySelector("#floor_option_selector");
	botao_chao.addEventListener("click", function(){
		if(seletor_textura_chao.getAttribute("data-value") == "disabled"){
	    	seletor_textura_chao.setAttribute("data-value","enabled");	
	    	seletor_textura_chao.style.visibility = "visible";
	    	setLayerSeletoresVisible();
	    }	    
	});
	let opcoes_textura = seletor_textura_chao.children[1].children;
	for(let opc of opcoes_textura){
		opc.addEventListener("click", function(){
			if(seletor_textura_chao.getAttribute("data-value") == "enabled"){				
				let textura = opc.getAttribute("data-value");
				Dados.floorTexture = textura;
				chao.style.backgroundImage = "url(\"Sprites/floor_textures/" + Dados.floorTexture + "\")";				
			}
		});
	}
	let salvar_textura_chao = seletor_textura_chao.children[2];
	salvar_textura_chao.addEventListener("click", function(){
		if(seletor_textura_chao.getAttribute("data-value") == "enabled"){
	    	seletor_textura_chao.setAttribute("data-value","disabled");
	    	seletor_textura_chao.style.visibility = "hidden";
	    	setLayerSeletoresHidden();
	    	salvarDadosCena(Dados);
	    }
	});
}

function setBackgroundOptions(){
	let botao_background = document.querySelector("#botao_fundo"); 
	let background = document.querySelector("#fundo"); 
	let seletor_textura_fundo = document.querySelector("#background_option_selector");
	botao_background.addEventListener("click", function(){
		if(seletor_textura_fundo.getAttribute("data-value") == "disabled"){
	    	seletor_textura_fundo.setAttribute("data-value","enabled");	
	    	seletor_textura_fundo.style.visibility = "visible";
	    	setLayerSeletoresVisible();
	    }
	});
	let opcoes_background = seletor_textura_fundo.children[1].children;
	for(let opc of opcoes_background){
		opc.addEventListener("click", function(){
			if(seletor_textura_fundo.getAttribute("data-value") == "enabled"){				
				let textura = opc.getAttribute("data-value");
				Dados.backgroundTexture = textura;
				Dados.backgroundColor = null;     
				background.style.backgroundImage = "url(\"Sprites/floor_textures/" + Dados.backgroundTexture + "\")";				
				background.style.backgroundColor = "white";
			}
		});
	}
	let aplicar_cor  = seletor_textura_fundo.children[3];
	aplicar_cor.addEventListener("click", function(){
		if(seletor_textura_fundo.getAttribute("data-value") == "enabled"){				
			let color = seletor_textura_fundo.children[2].value;
			Dados.backgroundColor = color;
			Dados.backgroundTexture = null;
			background.style.backgroundImage = "";
			background.style.backgroundColor = Dados.backgroundColor;				
		}
	});
	let salvar_background = seletor_textura_fundo.children[4];
	salvar_background.addEventListener("click", function(){
		if(seletor_textura_fundo.getAttribute("data-value") == "enabled"){
	    	seletor_textura_fundo.setAttribute("data-value","disabled");
	    	seletor_textura_fundo.style.visibility = "hidden";
	    	setLayerSeletoresHidden();
	    	salvarDadosCena(Dados);
	    }
	});
}

function setAlienOptions(){
	let botao_alien = document.querySelector("#botao_alien"); 	
	let seletor_cor_alien = document.querySelector("#alien_color_selector");
	botao_alien.addEventListener("click", function(){
		if(seletor_cor_alien.getAttribute("data-value") == "disabled"){
	    	seletor_cor_alien.setAttribute("data-value","enabled");	
	    	seletor_cor_alien.style.visibility = "visible";
	    	setLayerSeletoresVisible();
	    }
	});
	let opcoes_cor = seletor_cor_alien.children[1].children;
	for(let opc of opcoes_cor){
		opc.addEventListener("click", function(){
			if(seletor_cor_alien.getAttribute("data-value") == "enabled"){
				let color = opc.getAttribute("data-value");
				Dados.userColor = color;
				updateCharacterColor(color);
			}
		});
	}
	let salvar_cor_alien = seletor_cor_alien.children[2];
	salvar_cor_alien.addEventListener("click", function(){
		if(seletor_cor_alien.getAttribute("data-value") == "enabled"){
	    	seletor_cor_alien.setAttribute("data-value","disabled");
	    	seletor_cor_alien.style.visibility = "hidden";
	    	setLayerSeletoresHidden();
	    	salvarDadosCena(Dados);
	    }
	});	
}

function setIconeOptions(){
	let botao_icone = document.querySelector("#botao_icone"); 	
	let selector_icone = document.querySelector("#icon_selector"); 	
	botao_icone.addEventListener("click", function(){
		selector_icone.style.visibility = "visible";
		setLayerSeletoresVisible();
	});
	let salvar_icone = selector_icone.children[2];
	salvar_icone.addEventListener('click', function(){
		let input = selector_icone.children[1];		
		Dados.icon = input.value;
		setPageIcon(Dados.icon);
		selector_icone.style.visibility = "hidden";		
		setLayerSeletoresHidden();
		salvarDadosPortifolio(Dados);
	});
}

if(Dados.myPage){
	initGaleria();
	let propriedades = document.querySelector("#propriedades");
	let excluir = document.querySelector("#excluir");
	let alterar = document.querySelector("#alterar");
	let botao_modo = document.querySelector("#computer");
	let widgets_panel = document.querySelector("#widgets");

	let objetos = document.querySelectorAll(".objeto");
	for (let i = 0; i < objetos.length; i++) {
		objetos[i].addEventListener('click', criarPropriedades);
	}

	alterar.addEventListener('click', lidaAlterar);
	excluir.addEventListener('click', function(e){		
		propriedades.style.visibility = "hidden";
		lidaExcluir(Dados);
	});

	botao_modo.addEventListener('click', function(){
		if(botao_modo.getAttribute("data-value") == "Editar"){
			let objeto = document.querySelectorAll(".objeto");
	      	botao_modo.setAttribute("data-value","Salvar");
			for (let i = 0; i < objeto.length; i++) {
				objeto[i].classList.add("resize-drag");
				if(objeto[i].id.startsWith("video")) objeto[i].firstChild.style.pointerEvents = "auto";
				if(objeto[i].id.startsWith("musica")) objeto[i].firstChild.style.pointerEvents = "auto";				
			}
			widgets_panel.style.visibility = "visible";
	    }	    
	});
	let salvar_alteracoes = document.querySelector("#salvar_alteracoes");
	salvar_alteracoes.addEventListener('click', function(){	   
	    if(botao_modo.getAttribute("data-value") == "Salvar"){
	    	botao_modo.setAttribute("data-value","Editar");		
			widgets_panel.style.visibility = "hidden";
			propriedades.style.visibility = "hidden";
	    	salvarDadosPortifolio(Dados);		
	    }
	});

	//configuração das propriedades do chao///
	setChaoOptions();
	//configuração das propriedades do fundo/////////
	setBackgroundOptions();
	//configuração das propriedades do alien/////
	setAlienOptions();

	setIconeOptions();

	//ABRE MODAL
	let conteiner_widgets = document.getElementById("widgets_container");
	for (let widget of conteiner_widgets.children) {
	    widget.addEventListener('click', function(e){
	        if(this.id == "texto"){
	            Dados.num_textos++;
	            criaObjetoTexto(Dados.num_textos);	            
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
	        Dados.num_imagens++;
	        criaObjetoImagem(Dados.num_imagens);
	        break;

	    case "video":
	        Dados.num_videos++;
	        criaObjetoVideo(Dados.num_videos);
	        break;

	    case "musica":
	        Dados.num_musicas++;
	        criaObjetoMusica(Dados.num_musicas);
	        break;

	    case "galeria":
	        Dados.num_galerias++;
	        criaObjetoGaleria(Dados.num_galerias, Dados.galerias);
	        break;

	    }
	});

	botao_modal_cancelar.addEventListener('click', function(event){
	  modal.style.display = "none";
	});
}