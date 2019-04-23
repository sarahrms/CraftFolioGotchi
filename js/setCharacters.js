const DELTATIME = 40; //milisegundos//
const GRAVITY = -9.8;
const SCALE = 1;
const FLOORHEIGHT = 0;

function setAlienCharacter(color, position, controllable, htmlElementID){
    let character = new Character(color, position, new Vector2D(7, 28), controllable, htmlElementID);

    let idleSpriteSheet = new SpriteSheet("Sprites/alien_" + character.color, "idle", "png", new Vector2D(235, 440), 1, 5);
    let idleAnimation = new Animation(idleSpriteSheet, DELTATIME, false);
    character.addStateAnimation("idle", idleAnimation);
    character.setInitialState("idle");

    let turnSpriteSheet = new SpriteSheet("Sprites/alien_" + character.color, "turn", "png", new Vector2D(235, 440), 1, 3);
    let turnAnimation = new Animation(turnSpriteSheet, DELTATIME*0.8, true);
    character.addStateAnimation("turn", turnAnimation);

    let walkSpriteSheet = new SpriteSheet("Sprites/alien_" + character.color, "walk", "png", new Vector2D(235, 440), 1, 6);
    let walkAnimation = new Animation(walkSpriteSheet, DELTATIME*0.9, true);
    character.addStateAnimation("walk", walkAnimation);

    let jumpSpriteSheet = new SpriteSheet("Sprites/alien_" + character.color, "jump", "png", new Vector2D(331, 462), 1, 4);
    let jumpAnimation = new Animation(jumpSpriteSheet, DELTATIME*2, true);
    character.addStateAnimation("jump", jumpAnimation);

    if(controllable){
        character.addTransition("idle", "keydown", LEFTARROW, "turn");
        character.addTransition("idle", "keydown", RIGHTARROW, "turn");

        character.addTransition("turn", "", "", "walk");

        character.addTransition("walk", "keyup", LEFTARROW, "idle");
        character.addTransition("walk", "keyup", RIGHTARROW, "idle");

        character.addTransition("idle", "keydown", UPARROW, "jump");
        character.addTransition("walk", "keydown", UPARROW, "jump");

        character.addTransition("jump", "", "", "idle");
    }

    return character;
}
