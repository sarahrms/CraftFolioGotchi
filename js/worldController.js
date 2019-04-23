let myPage = true;
let userColor = "blue";
let visitorColor = "blue";

///////////////////////////////////////////////CHARACTERS SHITS////////////////////////////////////////////////////
let userCharacter;
let visitorCharacter;
let cow = document.getElementById("cow");
let audio = new Audio('moo.mp3');

if(myPage){//if i'm on my own page//
    userCharacter = setAlienCharacter(userColor, new Vector2D(50, FLOORHEIGHT), true, "userCharacter");
}
else { //if i'm on another user's page, if i'm a visitor//
    userCharacter = setAlienCharacter(userColor,  new Vector2D(50, FLOORHEIGHT), false, "userCharacter");
    visitorCharacter = setAlienCharacter(visitorColor,  new Vector2D(200, FLOORHEIGHT), true, "visitorCharacter");
    visitorCharacter.htmlElement.style.display = "block";
}
/////////////////////////////////////////////////TIMING SHITS//////////////////////////////////////////////////////
let physicsClock = setInterval(() => updatePositions(), DELTATIME);///////DON'T CHANGE ANYTHING HERE///////////////

function updatePositions(){
    userCharacter.updatePosition(GRAVITY, SCALE, FLOORHEIGHT);
    if(myPage == false){
        visitorCharacter.updatePosition(GRAVITY, SCALE, FLOORHEIGHT);
    }
}

function moo(){
    if(audio.paused){
        audio.play();
    }
}

////////////////////////////////////////////KEYBOARD INPUT SHITS///////////////////////////////////////////////////
document.addEventListener("keydown", function(event) {
    if(myPage){
        userCharacter.updateAceleration("keydown", event.keyCode);
        userCharacter.verifyTransitions("keydown", event.keyCode);
    }
    else{
        visitorCharacter.updateAceleration("keydown", event.keyCode);
        visitorCharacter.verifyTransitions("keydown", event.keyCode);
    }
});

document.addEventListener("keyup", function(event) {
    if(myPage){
        userCharacter.updateAceleration("keyup", event.keyCode);
        userCharacter.verifyTransitions("keyup", event.keyCode);
    }
    else{
        visitorCharacter.updateAceleration("keyup", event.keyCode);
        visitorCharacter.verifyTransitions("keyup", event.keyCode);
    }
});

window.addEventListener("resize", function() {
    RightLimit = window.screen.width*0.9;
    //manter proporção no personagem//
});

cow.addEventListener("click", function() {
    moo();
});

