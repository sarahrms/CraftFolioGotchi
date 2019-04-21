const deltaTime = 40; //milisegundos//
const gravity = 9.8;
const scale = 0.2;
const floorHeight = 15;
/////////////////////////////////////////////////MAIN CHARACTER////////////////////////////////////////////////////
var mainCharacter = new Character("blue", new Vector2D(300, floorHeight), new Vector2D(75, 150), true, "mainCharacter");

let idleAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "idle", "png", 1, 5, false);
mainCharacter.addStateAnimation("idle", idleAnimatedSprite, deltaTime);
mainCharacter.setInitialState("idle");
mainCharacter.updateAnimation();

let turnAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "turn", "png", 1, 3, true);
mainCharacter.addStateAnimation("turn", turnAnimatedSprite, deltaTime);

let walkAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "walk", "png", 1, 6, true);
mainCharacter.addStateAnimation("walk", walkAnimatedSprite, deltaTime);

mainCharacter.addTransition("idle", "keydown", LeftArrow, "turn");
mainCharacter.addTransition("idle", "keydown", RightArrow, "turn");

mainCharacter.addTransition("turn", "", "", "walk");

mainCharacter.addTransition("walk", "keyup", LeftArrow, "idle");
mainCharacter.addTransition("walk", "keyup", RightArrow, "idle");

/////////////////////////////////////////////////TIMING SHITS//////////////////////////////////////////////////////
////////////FORBIDDEN ZONE/////////////////FORBIDDEN ZONE/////////////FORBIDDEN ZONE///////////////////////////////
let physicsClock = setInterval(() => updatePositions(), deltaTime);///////DON'T CHANGE ANYTHING HERE///////////////
let mainCharacterClock = setInterval(() => mainCharacter.updateAnimation(), deltaTime);//////////JUST DON'T///////////////
///////////////////////////////////JUST KEEP ON MOVING/////////////////////////////////////////////////////////////

function updatePositions(){
    mainCharacter.updatePosition(gravity, scale, floorHeight);
}

////////////////////////////////////////////KEYBOARD INPUT SHITS///////////////////////////////////////////////////
document.addEventListener("keydown", function(event) {
    mainCharacter.updateAceleration("keydown", event.keyCode);
    clearInterval(mainCharacterClock);
    let delta = mainCharacter.verifyTransitions("keydown", event.keyCode);
    mainCharacterClock = setInterval(() => mainCharacter.updateAnimation(), delta);
});

document.addEventListener("keyup", function(event) {
    mainCharacter.updateAceleration("keyup", event.keyCode);
    clearInterval(mainCharacterClock);
    let delta = mainCharacter.verifyTransitions("keyup", event.keyCode);
    mainCharacterClock = setInterval(() => mainCharacter.updateAnimation(), delta);
});
