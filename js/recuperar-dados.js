let num_imagens = localStorage.getItem("num_imagens");
let num_textos = localStorage.getItem("num_textos");
let num_videos = localStorage.getItem("num_videos");
let num_musicas = localStorage.getItem("num_musicas");


if(localStorage.getItem("mundo_backgroundColor")!=null){
	console.log(localStorage.getItem("mundo_backgroundColor"))
	mundo.style.backgroundColor = localStorage.getItem("mundo_backgroundColor");
}

if(localStorage.getItem("chao_backgroundColor")!=null)
	chao.style.backgroundColor = localStorage.getItem("chao_backgroundColor");

for (let i = 1; i <= Number(num_imagens); i++) {
	let objeto = document.createElement("img");
	mundo.appendChild(objeto);
	objeto.outerHTML = localStorage.getItem("imagem-"+i+"_html");
}
for (let i = 1; i <= Number(num_textos); i++) {
	let objeto = document.createElement("textarea");
	mundo.appendChild(objeto);
	objeto.outerHTML = localStorage.getItem("texto-"+i+"_html");
}
for (let i = 1; i <= Number(num_videos); i++) {
	let objeto = document.createElement("video");
	mundo.appendChild(objeto);
	objeto.outerHTML = localStorage.getItem("video-"+i+"_html");
}
for (let i = 1; i <= Number(num_musicas); i++) {
	let objeto = document.createElement("audio");
	mundo.appendChild(objeto);
	objeto.outerHTML = localStorage.getItem("musica-"+i+"_html");
}
