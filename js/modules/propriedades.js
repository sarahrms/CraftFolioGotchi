let objeto = document.querySelectorAll(".objeto");
let propriedades = document.querySelector("#propriedades");
let formulario = document.querySelector("#formulario-propriedades");
let excluir = document.querySelector("#excluir");
let alterar = document.querySelector("#alterar");
let fora = document.querySelector("#fora");
let main = document.querySelectorAll("main");

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function apagarFormularioAntigo(){
    let no = document.querySelector("#formulario-propriedades").firstElementChild;
    while (no.tagName!="BUTTON") {
      let x = no;
      no = no.nextElementSibling;
      formulario.removeChild(x);
    }
}
function inputId(obj){
    let input_id = document.createElement("input");
    input_id.name="id";
    input_id.value = obj.id;
    input_id.classList.add("nao-exibir");
    formulario.insertBefore(input_id,alterar);
}

function inputURL(obj){
   let label_url = document.createElement("label");
   label_url.for="url";
   label_url.innerHTML  ="URL";
   formulario.insertBefore(label_url,formulario.alterar);

   let input_url = document.createElement("input");
   input_url.name="url";
   input_url.type="text";
   if(obj.id.startsWith("video")) input_url.value=obj.firstChild.nextSibling.src;
   else input_url.value=obj.src;
   formulario.insertBefore(input_url,formulario.alterar);
}

function inputArredondar(obj){
    let label_arredondar = document.createElement("label");
   label_arredondar.for="arredondar";
   label_arredondar.innerHTML ="Arredondar";
   formulario.insertBefore(label_arredondar,formulario.alterar);

   let input_arredondar = document.createElement("input");
   input_arredondar.name="arredondar";
   input_arredondar.type="number";
   input_arredondar.min="0";
   input_arredondar.value = obj.style.borderRadius.slice(0, -2);
   formulario.insertBefore(input_arredondar,formulario.alterar);
}

function inputHeight(obj){
   let label_height = document.createElement("label");
   label_height.for="altura";
   label_height.innerHTML ="Altura";
   formulario.insertBefore(label_height,formulario.alterar);

   let input_height = document.createElement("input");
   input_height.name="altura";
   input_height.type="number";
   input_height.min="0";
   input_height.value = obj.style.height.slice(0, -2);
   formulario.insertBefore(input_height,formulario.alterar);
}

function inputWidth(obj){
    let label_width = document.createElement("label");
   label_width.for="largura";
   label_width.innerHTML  ="Largura";
   formulario.insertBefore(label_width,formulario.alterar);

   let input_width = document.createElement("input");
   input_width.name="largura";
   input_width.type="number";
   input_width.min="0";
   input_width.value = obj.style.width.slice(0, -2);
   formulario.insertBefore(input_width,formulario.alterar);
}

function inputCor(obj){
    let compStyles = window.getComputedStyle(obj);

    let label_cor = document.createElement("label");
    label_cor.for="cor";
    label_cor.innerHTML ="Cor";
    formulario.insertBefore(label_cor,formulario.alterar);

    let input_cor = document.createElement("input");
    input_cor.id="cor";
    input_cor.name="cor";
    input_cor.type="color";
    input_cor.value=rgb2hex(compStyles.getPropertyValue('background-color'));
    formulario.insertBefore(input_cor,formulario.alterar);
}

//CRIA FORMULARIO DE PROPRIEDADES
export function criaPropriedades(e){
    e.stopPropagation();
    apagarFormularioAntigo();

    if(botao_modo.getAttribute("data-value") != "Editar"){
      if(this.classList.contains("objeto")){
        switch(this.id.match("(.*)-.*")[1]){
            case "imagem":
                inputId(this);
                inputURL(this);
                inputArredondar(this);
                inputHeight(this);
                inputWidth(this);
                excluir.classList.remove("nao-exibir");
                alterar.classList.remove("nao-exibir");
                propriedades.style.backgroundColor = "lightgreen";
                break;
             case "texto":
                inputId(this);
                inputHeight(this);
                inputWidth(this);
                excluir.classList.remove("nao-exibir");
                alterar.classList.remove("nao-exibir");
                propriedades.style.backgroundColor = "lightgreen";
                break;
            case "video":
                inputId(this);
                inputURL(this);
                inputHeight(this);
                inputWidth(this);
                excluir.classList.remove("nao-exibir");
                alterar.classList.remove("nao-exibir");
                propriedades.style.backgroundColor = "lightgreen";
                break;
            case "musica":
                inputId(this);
                inputURL(this);
                inputHeight(this);
                inputWidth(this);
                excluir.classList.remove("nao-exibir");
                alterar.classList.remove("nao-exibir");
                propriedades.style.backgroundColor = "lightgreen";
                break;
            case "galeria":
                inputId(this);
                inputHeight(this);
                inputWidth(this);
                excluir.classList.remove("nao-exibir");
                alterar.classList.remove("nao-exibir");
                propriedades.style.backgroundColor = "lightgreen";
                break;
        }
      }
      else if(this.id == "mundo" || this.id == "chao"){
        inputId(this);
        inputCor(this);

        alterar.classList.remove("nao-exibir");
        excluir.classList.add("nao-exibir");
        propriedades.style.backgroundColor = "lightgreen"
      }else{
        alterar.classList.add("nao-exibir");
        excluir.classList.add("nao-exibir");
        propriedades.style.backgroundColor = "khaki"
      }
  }
}

alterar.addEventListener('click', lidaAlterar);
excluir.addEventListener('click', lidaExcluir);

//LIDA AS POSSIVEIS AÇÕES NO FORMULARIO
function lidaAlterar(e){
  event.preventDefault();
  let id = document.querySelector("#formulario-propriedades > input.nao-exibir").value;
  let obj = document.querySelector("#"+id);
  //console.log(obj);
  if(obj.classList.contains("objeto")){
    switch(obj.id.match("(.*)-.*")[1]){
        case "imagem":
            obj.src=document.querySelector("#formulario-propriedades > input[name='url']").value;
            obj.style.borderRadius=document.querySelector("#formulario-propriedades > input[name='arredondar']").value+"px";
            obj.style.height=document.querySelector("#formulario-propriedades > input[name='altura']").value+"px";
            obj.style.width=document.querySelector("#formulario-propriedades > input[name='largura']").value+"px";
            break;
         case "texto":
            obj.style.height=document.querySelector("#formulario-propriedades > input[name='altura']").value+"px";
            obj.style.width=document.querySelector("#formulario-propriedades > input[name='largura']").value+"px";
            break;
        case "video":
            obj.firstChild.nextSibling.src=document.querySelector("#formulario-propriedades > input[name='url']").value.replace("watch?v=", "embed/");;
            obj.style.height=document.querySelector("#formulario-propriedades > input[name='altura']").value+"px";
            obj.style.width=document.querySelector("#formulario-propriedades > input[name='largura']").value+"px";
            break;
        case "musica":
            obj.src=document.querySelector("#formulario-propriedades > input[name='url']").value;
            obj.style.height=document.querySelector("#formulario-propriedades > input[name='altura']").value+"px";
            obj.style.width=document.querySelector("#formulario-propriedades > input[name='largura']").value+"px";
            break;
        case "galeria":
            obj.style.height=document.querySelector("#formulario-propriedades > input[name='altura']").value+"px";
            obj.style.width=document.querySelector("#formulario-propriedades > input[name='largura']").value+"px";
            break;
    }
  }
}

function lidaExcluir(e){
  let id = document.querySelector("#formulario-propriedades > input.nao-exibir").value;
  let obj = document.querySelector("#"+id);
  let ultimo_obj;
  let id_ultimo_obj;

  switch(obj.id.match("(.*)-.*")[1]){
        case "imagem": id_ultimo_obj = "imagem-"+num_imagens; num_imagens--; break;
        case "video": id_ultimo_obj = "video-"+num_videos; num_videos--; break;
        case "musica": id_ultimo_obj = "musica-"+num_musicas; num_musicas--; break;
        case "texto": id_ultimo_obj = "texto-"+num_textos;  num_textos--; break;
        case "galeria":
          id_ultimo_obj = "galeria-"+num_galerias;
          num_galerias--;
          galerias[id] = galerias[id_ultimo_obj];
          delete galerias[id_ultimo_obj];
          break;
  }
  mundo.removeChild(obj);
  document.querySelector("#"+id_ultimo_obj).id=id;
  localStorage.removeItem(id_ultimo_obj+"_outerHTML");
  localStorage.removeItem(id_ultimo_obj+"_innerHTML");
}
