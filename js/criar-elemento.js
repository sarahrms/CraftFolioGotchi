function criaObjetoImagem(x){
    let objeto;
    objeto = document.createElement("img");
    objeto.classList.add("resize-drag");
    objeto.id="imagem-"+x;
    objeto.classList.add("objeto");
    objeto.src=document.querySelector("#modal > div > form > input").value;
    objeto.style.width="100px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
    objeto.addEventListener('click', criaPropriedades);
}

function criaObjetoVideo(x){
    let objeto;
    objeto = document.createElement("iframe");
    objeto.classList.add("resize-drag");
    objeto.id="video-"+x;
    objeto.src=document.querySelector("#modal > div > form > input").value.replace("watch?v=", "embed/");;
    objeto.classList.add("objeto");
    objeto.style.width="200px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
    objeto.addEventListener('click', criaPropriedades);
}

function criaObjetoMusica(x){
    let objeto;
    objeto = document.createElement("audio");
    objeto.id="musica-"+x;
    objeto.src=document.querySelector("#modal > div > form > input").value;
    objeto.controls = true;
    objeto.classList.add("objeto");
    objeto.style.width="100px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
    objeto.addEventListener('click', criaPropriedades);
}

function criaObjetoTexto(x){
    let objeto;
    objeto = document.createElement("textarea");
    objeto.classList.add("resize-drag");
    objeto.classList.add("objeto");
    objeto.id="texto-"+x;
    objeto.style.width="100px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
    objeto.addEventListener('click', criaPropriedades);
}


//ABRE MODAL
for (let i = 0; i < widget.length; i++) {
    widget[i].addEventListener('click', function(e){
        if(this.id == "texto"){
            num_textos++;
            criaObjetoTexto(num_textos);
            
        }else{
          let modal_titulo = document.querySelector("#modal > div > h4");
          modal_titulo.innerHTML = this.id.toUpperCase();
          modal.style.display = "block";
        }
    });
}

modal.addEventListener('submit', function(event){
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
    }
});