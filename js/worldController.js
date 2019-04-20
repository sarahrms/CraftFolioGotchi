const deltaTime = 25; //milisegundos//
const gravity = 9.8;
const scale = 0.2;
const floorHeight = 35;

//////////////////////////////////////configurando o personagem principal//////////////////////////////////////////
let position = new Vector2D(300, floorHeight);
let velocity = new Vector2D(0, 0);
let dimension = new Vector2D(100, 200);

var mainCharacter = new Character("blue", position, velocity, dimension);

mainCharacter.setInitialState("idle");

let idleAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "idle", "png",
             new Vector2D(100, 200), 1, 6);
mainCharacter.addStateAnimation("idle", idleAnimatedSprite, 1000);

let walkAnimatedSprite = new AnimatedSprite("Sprites/alien_" + mainCharacter.color, "walk", "png",
             new Vector2D(100, 200), 1, 6);
mainCharacter.addStateAnimation("walk", walkAnimatedSprite, 5000);

mainCharacter.addTransition("idle", "LeftArrow", "walk");



document.addEventListener("keydown", function(event) {
    animation = mainCharacter.updateState(event.code, clock);
});

/////////////////////////////////////////////////TIMING SHITS//////////////////////////////////////////////////////

////////////FORBIDDEN ZONE/////////////////FORBIDDEN ZONE/////////////FORBIDDEN ZONE///////////////////////////////
let physicsClock = setInterval(() => updatePositions(), deltaTime);///////DON'T CHANGE ANYTHING HERE///////////////
let animationClock = setInterval(() => updateAnimations(), deltaTime);//////////////JUST DON'T/////////////////////
///////////////////////////////////JUST KEEP ON MOVING/////////////////////////////////////////////////////////////

function updatePositions(){
    mainCharacter.updatePosition(gravity, scale, floorHeight);
}

function updateAnimations(){
    mainCharacter.updateAnimation();
}
