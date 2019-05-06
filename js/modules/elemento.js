import {proximaImgemDireita, proximaImgemEsquerda} from "./galeria.js"; 
import {criarPropriedades} from "./propriedades.js";

let mundo = document.querySelector("#mundo");

export function criaObjetoImagem(x){
    let objeto;
    objeto = document.createElement("img");
    objeto.classList.add("resize-drag");
    objeto.id="imagem-"+x;
    objeto.classList.add("objeto");
    console.log(document.querySelector("#modal > div > form > input").value);
    objeto.src=document.querySelector("#modal > div > form > input").value;
    objeto.style.width="100px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
    objeto.addEventListener('click', criarPropriedades);
}

export function criaObjetoVideo(x){
    let objeto;
    let conteiner1, conteiner2;

    conteiner1 = document.createElement("div");
    conteiner1.classList.add("resize-drag");
    conteiner1.id="video-"+x;
    conteiner1.classList.add("objeto");
    conteiner1.style.width="100px";
    conteiner1.style.height="100px";

    conteiner2 = document.createElement("div");
    conteiner2.classList.add("div-in");
    conteiner2.style.width="100%";
    conteiner2.style.height="100%";
    conteiner1.appendChild(conteiner2);

    objeto = document.createElement("iframe");
    objeto.src=document.querySelector("#modal > div > form > input").value.replace("watch?v=", "embed/");
    objeto.style.width="100%";
    objeto.style.height="100%";

    conteiner1.appendChild(objeto);

    mundo.appendChild(conteiner1);

   conteiner1.addEventListener('click', criarPropriedades);
}

export function criaObjetoMusica(x){
    let objeto;
    let conteiner, conteiner2;

    conteiner1 = document.createElement("div");
    conteiner1.classList.add("resize-drag");
    conteiner1.id="musica-"+x;
    conteiner1.classList.add("objeto");
    conteiner1.style.width="100px";
    conteiner1.style.height="100px";

    conteiner2 = document.createElement("div");
    conteiner2.classList.add("div-in");
    conteiner2.style.width="100%";
    conteiner2.style.height="100%";
    conteiner1.appendChild(conteiner2);

    objeto = document.createElement("audio");
    objeto.src=document.querySelector("#modal > div > form > input").value;
    objeto.controls = true;
    objeto.style.width="100%";
    objeto.style.height="100%";
    conteiner1.appendChild(objeto);
    mundo.appendChild(conteiner1);

    objeto.addEventListener('click', criarPropriedades);
}

export function criaObjetoTexto(x){
    let objeto;
    objeto = document.createElement("textarea");
    objeto.classList.add("resize-drag");
    objeto.classList.add("objeto");
    objeto.id="texto-"+x;
    objeto.style.width="100px";
    objeto.style.height="100px";
    mundo.appendChild(objeto);
    objeto.addEventListener('click', criarPropriedades);
}

export function criaObjetoGaleria(x){
    let objeto;
    let seta_direita;
    let seta_esquerda;
    let conteiner;
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
    objeto.src = galerias["galeria-"+x][0];
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
    conteiner.addEventListener('click', criarPropriedades);

    seta_direita.addEventListener('click',proximaImgemDireita);
    seta_esquerda.addEventListener('click',proximaImgemEsquerda);
}