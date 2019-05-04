export function recuperarDados(){
	let Dados = new Object();
	Dados.num_imagens = localStorage.getItem("num_imagens");
	Dados.num_textos = localStorage.getItem("num_textos");
	Dados.num_videos = localStorage.getItem("num_videos");
	Dados.num_musicas = localStorage.getItem("num_musicas");
	Dados.num_galerias = localStorage.getItem("num_galerias");
	Dados.galerias = JSON.parse(window.localStorage.getItem("galerias"));

	Dados.myPage = localStorage.getItem("myPage");
	Dados.userColor = localStorage.getItem("userColor");
	Dados.visitorColor = localStorage.getItem("visitorColor");

	if (Dados.num_imagens==null) { Dados.num_imagens = 0; }
	if (Dados.num_textos==null) { Dados.num_textos = 0; }
	if (Dados.num_videos==null) { Dados.num_videos = 0; }
	if (Dados.num_musicas==null) { Dados.num_musicas = 0; }
	if (Dados.num_galerias==null) { Dados.num_galerias = 0; }
	if (Dados.galerias==null) { Dados.galerias = {}; }
	if (Dados.myPage==null) { Dados.myPage = true; }
	if (Dados.userColor==null) { Dados.userColor = "blue"; }
	if (Dados.visitorColor==null){ Dados.visitorColor = "green"; }

	Dados.backgroundColor = localStorage.getItem("backgroundColor");
	if(Dados.backgroundColor!=null){
		let background = document.querySelector("body");
		background.style.backgroundColor = Dados.backgroundColor;
	}

	Dados.floorColor = localStorage.getItem("floorColor");
	if(Dados.floorColor!=null){	
		let chao = document.querySelector("#chao");
		chao.style.backgroundColor = Dados.floorColor;
	}

	let mundo = document.querySelector("#mundo");
	for (let i = 1; i <= Number(Dados.num_imagens); i++) {
		let objeto = document.createElement("img");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("imagem-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("imagem-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(Dados.num_textos); i++) {
		let objeto = document.createElement("textarea");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("texto-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("texto-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(Dados.num_videos); i++) {
		let objeto = document.createElement("video");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("video-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("video-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(Dados.num_musicas); i++) {
		let objeto = document.createElement("audio");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("musica-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("musica-"+i+"_innerHTML");
	}
	for (let i = 1; i <= Number(Dados.num_galerias); i++) {
		let objeto = document.createElement("div");
		mundo.appendChild(objeto);
		objeto.outerHTML = localStorage.getItem("galeria-"+i+"_outerHTML");
		objeto.innerHTML = localStorage.getItem("galeria-"+i+"_innerHTML");
	}
	return Dados;
}