import {setAlienCharacter, setCowCharacter, DELTATIME, GRAVITY, SCALE, FLOORHEIGHT} from "./modules/setCharacters.js";
import {recuperarDados} from "./modules/recuperarDados.js";
import {Vector2D} from "./modules/classes/Vector2D.js";

let Dados = recuperarDados();
///////////////////////////////////////////////CHARACTERS SHITS////////////////////////////////////////////////////
let userCharacter;
let visitorCharacter;
let cow = setCowCharacter();
let mooAudio = new Audio('moo.mp3');

if(Dados.myPage){//if i'm on my own page//
    userCharacter = setAlienCharacter(Dados.userColor, new Vector2D(50, FLOORHEIGHT), true, "userCharacter");
}
else { //if i'm on another user's page, if i'm a visitor//
    userCharacter = setAlienCharacter(Dados.userColor,  new Vector2D(50, FLOORHEIGHT), false, "userCharacter");
    visitorCharacter = setAlienCharacter(Dados.visitorColor,  new Vector2D(200, FLOORHEIGHT), true, "visitorCharacter");
    visitorCharacter.htmlElement.style.display = "block";
}
/////////////////////////////////////////////////TIMING SHITS//////////////////////////////////////////////////////
let physicsClock = setInterval(() => updatePositions(), DELTATIME);///////DON'T CHANGE ANYTHING HERE///////////////

export function updateCharacterColor(color){
    if(Dados.myPage){
        userCharacter.updateColor("Sprites/alien_"+ color, color);
    }
}

function updatePositions(){
    userCharacter.updatePosition(GRAVITY, SCALE, FLOORHEIGHT);
    if(Dados.myPage == false){
        visitorCharacter.updatePosition(GRAVITY, SCALE, FLOORHEIGHT);
    }
}

function playAudio(audio){
    if(audio.paused){
        audio.play();
    }
}

////////////////////////////////////////////KEYBOARD INPUT SHITS///////////////////////////////////////////////////
document.addEventListener("keydown", function(event) {
    if(Dados.myPage){
        userCharacter.updateAceleration("keydown", event.keyCode);
        userCharacter.verifyTransitions("keydown", event.keyCode);
    }
    else{
        visitorCharacter.updateAceleration("keydown", event.keyCode);
        visitorCharacter.verifyTransitions("keydown", event.keyCode);
    }
});

document.addEventListener("keyup", function(event) {
    if(Dados.myPage){
        userCharacter.updateAceleration("keyup", event.keyCode);
        userCharacter.verifyTransitions("keyup", event.keyCode);
    }
    else{
        visitorCharacter.updateAceleration("keyup", event.keyCode);
        visitorCharacter.verifyTransitions("keyup", event.keyCode);
    }
});

cow.htmlElement.addEventListener("click", function() {
    playAudio(mooAudio);
    cow.verifyTransitions("click", "");
});

window.addEventListener("resize", function() {
    if(Dados.myPage){
         userCharacter.RightLimit = document.body.clientWidth;
    }
    else {
        visitorCharacter.RightLimit = document.body.clientWidth;
    }
    //manter proporção no personagem//
});