import {criarPropriedades} from "./propriedades.js";

export function setPageIcon(url){
	let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url
    document.getElementsByTagName('head')[0].appendChild(link);    
}

export function recuperarDadosPainel(){
	let Dados = new Object();
	Dados.num_imagens = localStorage.getItem("num_imagens");
	Dados.num_textos = localStorage.getItem("num_textos");
	Dados.num_videos = localStorage.getItem("num_videos");
	Dados.num_musicas = localStorage.getItem("num_musicas");
	Dados.num_galerias = localStorage.getItem("num_galerias");
	Dados.galerias = JSON.parse(window.localStorage.getItem("galerias"));	
	Dados.icon = localStorage.getItem("icon");

	if (Dados.num_imagens == null || Dados.num_imagens == "undefined") { 
		Dados.num_imagens = 0; 
	}
	if (Dados.num_textos == null || Dados.num_textos == "undefined") { 
		Dados.num_textos = 0; 
	}
	if (Dados.num_videos == null || Dados.num_videos == "undefined") { 
		Dados.num_videos = 0; 
	}
	if (Dados.num_musicas == null || Dados.num_musicas == "undefined") { 
		Dados.num_musicas = 0; 
	}
	if (Dados.num_galerias == null || Dados.num_galerias == "undefined") { 
		Dados.num_galerias = 0; 
	}
	if (Dados.galerias == null || Dados.galerias == "undefined") { 
		Dados.galerias = {}; 
	}

	console.log((Dados));
	Dados.backgroundTexture = localStorage.getItem("backgroundTexture");	
	Dados.backgroundColor = localStorage.getItem("backgroundColor");

	if(Dados.backgroundTexture != null && Dados.backgroundTexture != "null" && Dados.backgroundTexture != "undefined"){
		let background = document.querySelector("#fundo");
		background.style.backgroundImage = "url(\"Sprites/floor_textures/" + Dados.backgroundTexture + "\")";
		background.style.backgroundColor = "none";
	}
	
	if(Dados.backgroundColor != null && Dados.backgroundColor != "null" && Dados.backgroundColor != "undefined"){
		let background = document.querySelector("#fundo");
		background.style.backgroundImage = "none";
		background.style.backgroundColor = Dados.backgroundColor;
	}

	Dados.floorTexture = localStorage.getItem("floorTexture");
	if(Dados.floorTexture != null && Dados.floorTexture != "null" && Dados.floorTexture != "undefined"){	
		let chao = document.getElementById("chao");
		chao.style.backgroundImage = "url(\"Sprites/floor_textures/" + Dados.floorTexture + "\")";
		console.log("chao");
	}

	let mundo = document.querySelector("#mundo");
	for (let i = 1; i <= Number(Dados.num_imagens); i++) {
		let objeto = document.createElement("img");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("imagem-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("imagem-"+i+"_innerHTML");
		objeto.addEventListener('click', criarPropriedades);
	}
	for (let i = 1; i <= Number(Dados.num_textos); i++) {
		let objeto = document.createElement("textarea");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("texto-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("texto-"+i+"_innerHTML");
		objeto.addEventListener('click', criarPropriedades);
	}
	for (let i = 1; i <= Number(Dados.num_videos); i++) {
		let objeto = document.createElement("video");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("video-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("video-"+i+"_innerHTML");
		objeto.addEventListener('click', criarPropriedades);
	}
	for (let i = 1; i <= Number(Dados.num_musicas); i++) {
		let objeto = document.createElement("audio");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("musica-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("musica-"+i+"_innerHTML");
		objeto.addEventListener('click', criarPropriedades);
	}
	for (let i = 1; i <= Number(Dados.num_galerias); i++) {
		let objeto = document.createElement("div");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("galeria-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("galeria-"+i+"_innerHTML");
		objeto.addEventListener('click', criarPropriedades);
	}

	Dados.myPage = localStorage.getItem("myPage");
	if (Dados.myPage == null || Dados.myPage == "undefined") { 
		Dados.myPage = true; 		
	}
	else if (Dados.myPage == "true"){
		Dados.myPage = true; 
	}
	else if (Dados.myPage == "false"){
		Dados.myPage = false; 
	}

	if(Dados.myPage){
		if(Dados.icon != null && Dados.icon != "null" && Dados.icon != "undefined"){
			setPageIcon(Dados.icon);
		}
	}

	return Dados;
}

export function recuperarDadosCena(){
	let Dados = new Object();
	Dados.myPage = localStorage.getItem("myPage");
	Dados.userColor = localStorage.getItem("userColor");
	Dados.visitorColor = localStorage.getItem("visitorColor");

	if (Dados.myPage == null || Dados.myPage == "undefined") { 
		Dados.myPage = true; 
	}
	if (Dados.userColor == null || Dados.userColor == "undefined") { 
		Dados.userColor = "blue"; 
	}
	if (Dados.visitorColor == null || Dados.visitorColor == "undefined"){ 
		Dados.visitorColor = "green"; 
	}

	return Dados;
}