import * from "./recuperarDados.js";

export function salvarDadosPortifolio(){
	let conteiner_widgets = document.querySelector("#widgets");
	let objeto = document.querySelectorAll(".objeto");
	for (let i = 0; i < widget.length; i++) {
			widget[i].style.display = "none";
	}
	for (let i = 0; i < objeto.length; i++) {
		if(objeto[i].id.startsWith("texto")) objeto[i].innerHTML = objeto[i].value;
		if(objeto[i].id.startsWith("video")) objeto[i].firstChild.style.pointerEvents = "none";
		if(objeto[i].id.startsWith("musica")) objeto[i].firstChild.style.pointerEvents = "none";

		objeto[i].classList.remove("resize-drag")
		localStorage.setItem(objeto[i].id+"_outerHTML",objeto[i].outerHTML);
		localStorage.setItem(objeto[i].id+"_innerHTML",objeto[i].innerHTML);
    }
    localStorage.setItem("galerias",JSON.stringify(galerias));
	let compStyles_mundo = window.getComputedStyle(mundo);
	let compStyles_chao = window.getComputedStyle(chao);

	localStorage.setItem("num_textos",num_textos);
	localStorage.setItem("num_imagens",num_imagens);
    localStorage.setItem("num_videos",num_videos);
    localStorage.setItem("num_musicas",num_musicas);
    localStorage.setItem("num_galerias",num_galerias);
}

export function salvarDadosCena(){
	localStorage.setItem("backgroundColor",backgroundColor);
	localStorage.setItem("floorColor", floorColor);
	localStorage.setItem("userColor", userColor);
	localStorage.setItem("visitorColor", visitorColor);
}


