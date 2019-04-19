const deltaTime = 1/40; //25 milisegundos//
const gravity = 9.8;
const scale = 0.2;
const floorHeight = 35;

//////////////////////////////////////configurando o personagem principal//////////////////////////////////////////
let mainCharacterElement = document.getElementById("mainCharacter");
let mainCharacterObject = new Character("blue", new Vector2D(300, floorHeight),
          new Vector2D(0, 0), new Vector2D(100, 200));

mainCharacterObject.setInitialState("idle");

let idleAnimation = new AnimatedSprite("Sprites/alien_" + mainCharacterObject.color, "idle", "png",
  new Vector2D(100, 200), 1, 3);
mainCharacterObject.addStateAnimation("idle", idleAnimation);


var clock = setInterval(tick, deltaTime);

function tick() {
  updatePositions();
  updateAnimations();
}

function updatePositions(){
  mainCharacterObject.updatePosition(gravity, scale, floorHeight);
}

function updateAnimations(){
    mainCharacterElement.src = mainCharacterObject.updateAnimation();
}

document.addEventListener('keydown', function(event) {
  mainCharacterObject.updateState(event.code);
});
