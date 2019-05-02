export let num_imagens, num_textos, num_videos, num_musicas;
export let num_galerias, galerias;
export let myPage, userColor, visitorColor;
export let backgroundColor, floorColor;

export function recuperarDados(){
	num_imagens = localStorage.getItem("num_imagens");
	num_textos = localStorage.getItem("num_textos");
	num_videos = localStorage.getItem("num_videos");
	num_musicas = localStorage.getItem("num_musicas");
	num_galerias = localStorage.getItem("num_galerias");
	galerias = JSON.parse(window.localStorage.getItem("galerias"));

	myPage = localStorage.getItem("myPage");
	userColor = localStorage.getItem("userColor");
	visitorColor = localStorage.getItem("visitorColor");

	if (num_imagens==null) { num_imagens = 0; }
	if (num_textos==null) { num_textos = 0; }
	if (num_videos==null) { num_videos = 0; }
	if (num_musicas==null) { num_musicas = 0; }
	if (num_galerias==null) { num_galerias = 0; }
	if (galerias==null) { galerias = {}; }
	if (myPage==null) { myPage = true; }
	if (userColor==null) { userColor = "blue"; }
	if (visitorColor==null){ visitorColor = "green"; }

	backgroundColor = localStorage.getItem("backgroundColor");
	if(backgroundColor!=null){
		let background = document.querySelector("body");
		background.style.backgroundColor = backgroundColor;
	}

	floorColor = localStorage.getItem("floorColor");
	if(floorColor!=null){	
		let chao = document.querySelector("#chao");
		chao.style.backgroundColor = floorColor;
	}

	for (let i = 1; i <= Number(num_imagens); i++) {
		let objeto = document.createElement("img");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("imagem-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("imagem-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(num_textos); i++) {
		let objeto = document.createElement("textarea");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("texto-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("texto-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(num_videos); i++) {
		let objeto = document.createElement("video");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("video-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("video-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(num_musicas); i++) {
		let objeto = document.createElement("audio");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("musica-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("musica-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(num_galerias); i++) {
		let objeto = document.createElement("div");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("galeria-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("galeria-"+i+"_innerHTML");
	}

}