const deltaTime = 40; //milisegundos//
const gravity = -9.8;
const scale = 1;
const floorHeight = 15;
/////////////////////////////////////////////////MAIN CHARACTER////////////////////////////////////////////////////
var mainCharacter = new Character("blue", new Vector2D(300, floorHeight), new Vector2D(75, 150), true, "mainCharacter");

let idleAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "idle", "png", 1, 5, false);
mainCharacter.addStateAnimation("idle", idleAnimatedSprite, deltaTime);
mainCharacter.setInitialState("idle");

let turnAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "turn", "png", 1, 3, true);
mainCharacter.addStateAnimation("turn", turnAnimatedSprite, deltaTime);

let walkAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "walk", "png", 1, 6, true);
mainCharacter.addStateAnimation("walk", walkAnimatedSprite, deltaTime*100);

let jumpAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "jump", "png", 1, 4, true);
mainCharacter.addStateAnimation("jump", jumpAnimatedSprite, deltaTime);

mainCharacter.addTransition("idle", "keydown", LeftArrow, "turn");
mainCharacter.addTransition("idle", "keydown", RightArrow, "turn");

mainCharacter.addTransition("turn", "", "", "walk");

mainCharacter.addTransition("walk", "keyup", LeftArrow, "idle");
mainCharacter.addTransition("walk", "keyup", RightArrow, "idle");

mainCharacter.addTransition("idle", "keydown", UpArrow, "jump");
mainCharacter.addTransition("walk", "keydown", UpArrow, "jump");

mainCharacter.addTransition("jump", "", "", "idle");

/////////////////////////////////////////////////TIMING SHITS//////////////////////////////////////////////////////
let physicsClock = setInterval(() => updatePositions(), deltaTime);///////DON'T CHANGE ANYTHING HERE///////////////

function updatePositions(){
    mainCharacter.updatePosition(gravity, scale, floorHeight);
}

////////////////////////////////////////////KEYBOARD INPUT SHITS///////////////////////////////////////////////////
document.addEventListener("keydown", function(event) {
    mainCharacter.updateAceleration("keydown", event.keyCode);
    mainCharacter.verifyTransitions("keydown", event.keyCode);
});

document.addEventListener("keyup", function(event) {
    mainCharacter.updateAceleration("keyup", event.keyCode);
    mainCharacter.verifyTransitions("keyup", event.keyCode);
});
