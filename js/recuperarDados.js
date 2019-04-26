let num_imagens = localStorage.getItem("num_imagens");
let num_textos = localStorage.getItem("num_textos");
let num_videos = localStorage.getItem("num_videos");
let num_musicas = localStorage.getItem("num_musicas");
let num_galerias = localStorage.getItem("num_galerias");
let galerias = JSON.parse(window.localStorage.getItem("galerias"));
console.log(galerias);

if (num_imagens==null) { num_imagens = 0; }
if (num_textos==null) { num_textos = 0; }
if (num_videos==null) { num_videos = 0; }
if (num_musicas==null) { num_musicas = 0; }
if (num_galerias==null) { num_galerias = 0; }
if (galerias==null) { galerias = {}; }

if(localStorage.getItem("mundo_backgroundColor")!=null){
	console.log(localStorage.getItem("mundo_backgroundColor"))
	mundo.style.backgroundColor = localStorage.getItem("mundo_backgroundColor");
}

if(localStorage.getItem("chao_backgroundColor")!=null)
	chao.style.backgroundColor = localStorage.getItem("chao_backgroundColor");

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
