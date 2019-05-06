export function salvarDadosPortifolio(Dados){
	let widgets = document.querySelector("#widgets");
	let objeto = document.querySelectorAll(".objeto");
	for (let i = 0; i < widgets.length; i++) {
			widgets[i].style.display = "none";
	}
	for (let i = 0; i < objeto.length; i++) {
		if(objeto[i].id.startsWith("texto")) objeto[i].innerHTML = objeto[i].value;
		if(objeto[i].id.startsWith("video")) objeto[i].firstChild.style.pointerEvents = "none";
		if(objeto[i].id.startsWith("musica")) objeto[i].firstChild.style.pointerEvents = "none";

		objeto[i].classList.remove("resize-drag")
		localStorage.setItem(objeto[i].id+"_outerHTML",objeto[i].outerHTML);
		localStorage.setItem(objeto[i].id+"_innerHTML",objeto[i].innerHTML);
    }
    localStorage.setItem("galerias",JSON.stringify(Dados.galerias));

	localStorage.setItem("num_textos",Dados.num_textos);
	localStorage.setItem("num_imagens",Dados.num_imagens);
    localStorage.setItem("num_videos",Dados.num_videos);
    localStorage.setItem("num_musicas",Dados.num_musicas);
    localStorage.setItem("num_galerias",Dados.num_galerias);
}

export function salvarDadosCena(Dados){
	if(Dados.backgroundTexture != null && Dados.backgroundColor == null){
		localStorage.setItem("backgroundTexture", Dados.backgroundTexture);
		localStorage.setItem("backgroundColor", null);
	}
	else if(Dados.backgroundTexture == null && Dados.backgroundColor != null){
		localStorage.setItem("backgroundTexture", null);
		localStorage.setItem("backgroundColor", Dados.backgroundColor);
	}

	localStorage.setItem("floorTexture", Dados.floorTexture);
	localStorage.setItem("myPage", Dados.myPage);
	localStorage.setItem("userColor", Dados.userColor);
	localStorage.setItem("visitorColor", Dados.visitorColor);
}


