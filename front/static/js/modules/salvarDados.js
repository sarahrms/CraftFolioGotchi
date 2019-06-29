export function salvarDadosPortifolio(Dados){
	var data=new Object()
	let url= window.location.href.split("/")
	data.id=url[url.length-1]

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
		var nome = objeto[i].id+"_outerHTML"
		nome = nome.replace("-","_")
		data[nome]=objeto[i].outerHTML
		localStorage.setItem(objeto[i].id+"_innerHTML",objeto[i].innerHTML);
		nome = objeto[i].id+"_innerHTML"
		nome = nome.replace("-","_")
		data[nome]=objeto[i].innerHTML
    }
    localStorage.setItem("galerias",JSON.stringify(Dados.galerias));
	data.galerias=JSON.stringify(Dados.galerias)
	localStorage.setItem("num_textos",Dados.num_textos);
	data.num_textos=Dados.num_textos
	localStorage.setItem("num_imagens",Dados.num_imagens);
	data.num_imagens=Dados.num_imagens
    localStorage.setItem("num_videos",Dados.num_videos);
    data.num_videos=Dados.num_videos
    localStorage.setItem("num_musicas",Dados.num_musicas);
    data.num_musicas=Dados.num_musicas
    localStorage.setItem("num_galerias",Dados.num_galerias);
    data.num_galerias=Dados.num_galerias
    localStorage.setItem("icon",Dados.icon);
    data.icon=Dados.icon
	console.log("Aqui Chegou")
	console.log(data)

	//console.log( document.getElementById("formMundo"))
   // document.getElementById("formMundo").submit();
    $.ajax({
        type: 'POST',
        url: '/salvarmundo', // This one is missing here
        data: data
    }).done(function(msg){
        console.log(msg); // log here 
    });
}

export function salvarDadosCena(Dados){
	var data=new Object()
	let url= window.location.href.split("/")
	data.id=url[url.length-1]
	localStorage.setItem("backgroundTexture", Dados.backgroundTexture);
	data.backgroundTexture=Dados.backgroundTexture
	localStorage.setItem("backgroundColor", Dados.backgroundColor);
	data.backgroundColor=Dados.backgroundColor
	localStorage.setItem("floorTexture", Dados.floorTexture);
	data.floorTexture=Dados.floorTexture
	localStorage.setItem("userColor", Dados.userColor);
	data.userColor=Dados.userColor


	$.ajax({
        type: 'POST',
        url: '/salvarcena', // This one is missing here
        data: data
    }).done(function(msg){
        console.log(msg); // log here 
    });
}


