function criaObjetoImagem(x){
    let objeto;
    objeto = document.createElement("img");
    objeto.classList.add("resize-drag");
    objeto.id="imagem-"+x;
    objeto.classList.add("objeto");
    console.log(document.querySelector(".input").innerHTML);
    objeto.src=document.querySelector(".input").innerHTML;
    objeto.style.width="100px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
    objeto.addEventListener('click', criaPropriedades);
}

function criaObjetoVideo(x){
    let objeto;
    let conteiner, conteiner2;

    conteiner = document.createElement("div");
    conteiner.classList.add("resize-drag");
    conteiner.id="video-"+x;
    conteiner.classList.add("objeto");
    conteiner.style.width="100px";
    conteiner.style.height="100px";

    conteiner2 = document.createElement("div");
    conteiner2.classList.add("div-in");
    conteiner2.style.width="100%";
    conteiner2.style.height="100%";
    conteiner.appendChild(conteiner2);

    objeto = document.createElement("iframe");
    console.log(document.querySelector(".input").innerHTML.replace("watch?v=", "embed/"));
    objeto.src=document.querySelector(".input").innerHTML.replace("watch?v=", "embed/");
    objeto.style.width="100%";
    objeto.style.height="100%";

    conteiner.appendChild(objeto);

    mundo.appendChild(conteiner);

    objeto.addEventListener('click', criaPropriedades);
}

function criaObjetoMusica(x){
    let objeto;
    let conteiner, conteiner2;

    conteiner = document.createElement("div");
    conteiner.classList.add("resize-drag");
    conteiner.id="musica-"+x;
    conteiner.classList.add("objeto");
    conteiner.style.width="100px";
    conteiner.style.height="100px";

    conteiner2 = document.createElement("div");
    conteiner2.classList.add("div-in");
    conteiner2.style.width="100%";
    conteiner2.style.height="100%";
    conteiner.appendChild(conteiner2);

    objeto = document.createElement("audio");
    objeto.src=document.querySelector(".input").innerHTML.replace("<span>","").replace("</span>","");
    objeto.controls = true;
    objeto.style.width="100%";
    objeto.style.height="100%";
    conteiner.appendChild(objeto);
    mundo.appendChild(conteiner);

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

function criaObjetoGaleria(x){
    let objeto;
    let seta_direita;
    let seta_esquerda;
    let conteiner;
    console.log(document.querySelector(".input").innerHTML.replace(new RegExp("<br></div>", 'g'),"").split("<div>"))
    galerias["galeria-"+x] = document.querySelector(".input").innerHTML.replace(new RegExp("<br></div>", 'g'),"").split("<div>");

    conteiner = document.createElement("div");
    conteiner.classList.add("resize-drag");
    conteiner.id="galeria-"+x;
    conteiner.classList.add("objeto");
    conteiner.style.width="100px";
    conteiner.style.height="100px";
    conteiner.setAttribute("data-value",0);

    objeto = document.createElement("img");
    objeto.style.objectFit = "fill";
    objeto.src=galerias["galeria-"+x][0];
    objeto.style.width="100%";
    objeto.style.height="100%";
    conteiner.appendChild(objeto);

    seta_direita = document.createElement("i");
    seta_direita.classList.add("material-icons");
    seta_direita.classList.add("seta-direita-galeria");
    seta_direita.innerHTML = "arrow_forward_ios";
    conteiner.appendChild(seta_direita);

    seta_esquerda = document.createElement("i");
    seta_esquerda.classList.add("material-icons");
    seta_esquerda.classList.add("seta-esquerda-galeria");
    seta_esquerda.innerHTML = "arrow_back_ios";
    conteiner.appendChild(seta_esquerda);

    mundo.appendChild(conteiner);
    conteiner.addEventListener('click', criaPropriedades);

    seta_direita.addEventListener('click',proximaImgemDireita);
    seta_esquerda.addEventListener('click',proximaImgemEsquerda);
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

    case "galeria":
        num_galerias++;
        criaObjetoGaleria(num_galerias);
        break;

    }
});