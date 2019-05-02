import * from "./Vector2D.js";
import * from "./Transition.js";

export const LEFTARROW = 37;
export const RIGHTARROW = 39;
export const UPARROW = 38;
export const WALKVELOCITY = 18;
export const JUMPACELERATION = 30;
export let LeftLimit = 0;
export let RightLimit = document.body.clientWidth;

export class Character {
    constructor(color, position, size, controllable, htmlElementID){
        this.color = color;
        this.position = position;
        this.velocity = new Vector2D(0, 0);
        this.aceleration = new Vector2D(0, 0);
        this.scale = new Vector2D(1, 1);
        this.size = size;

        this.jumping = false;
        this.controllable = controllable;

        this.stateAnimations = [];
        this.transitions = [];

        this.htmlElement = document.getElementById(htmlElementID);
    }

    updatePosition(gravity, scale, floorHeight){
        this.aceleration.y += gravity*scale;

        this.velocity.x += this.aceleration.x;
        this.velocity.y += this.aceleration.y;

        if((this.position.x + this.velocity.x) > LeftLimit && ((this.position.x + this.velocity.x) + this.size.x*RightLimit/100) < RightLimit){
            this.position.x += this.velocity.x;
        }
        this.position.y += this.velocity.y;

        if(this.position.y < floorHeight){
            if(this.jumping == true){
                this.jumping = false;
                this.velocity.x = 0;                
            }
            this.velocity.y = 0;
            this.aceleration.y = 0;
            this.position.y = floorHeight;
        }

        this.htmlElement.style.transform = "translate(" + this.position.x + "px, " + -this.position.y +"px) "
                  + "scale(" + this.scale.x + ", " + this.scale.y + ")"; //y upside-down//
    }

    setInitialState(state){
        this.currentState = state;
        let deltaTime = this.stateAnimations[this.currentState].deltaTime;
        this.clock = setInterval(() => this.updateAnimations(), deltaTime);
    }

    updateAceleration(inputEvent, inputCode){
        if(this.controllable == true){
            if(inputEvent == "keydown"){
                switch(inputCode){
                    case LEFTARROW: {
                        this.scale.x = -1;
                        this.velocity.x = WALKVELOCITY * this.scale.x;
                        break;
                    }
                    case RIGHTARROW: {
                        this.scale.x = 1;
                        this.velocity.x = WALKVELOCITY * this.scale.x;
                        break;
                    }
                    case UPARROW:{
                        if(this.jumping == false) {
                            this.jumping = true;
                            this.velocity.x = WALKVELOCITY/2 * this.scale.x;
                            this.aceleration.y = JUMPACELERATION;
                        }
                        break;
                    }
                }
            }
            else if(inputEvent == "keyup"){
                switch(inputCode){
                    case LEFTARROW:
                    case RIGHTARROW: {
                        this.velocity.x = 0;
                        break;
                    }
                }
            }
        }
    }

    verifyTransitions(inputEvent, inputCode){
        let possibleTransitions = this.transitions[this.currentState];
        if(typeof(possibleTransitions) !== "undefined"){
            for(let transition of possibleTransitions){
                if(transition.inputEvent == inputEvent & transition.inputCode == inputCode){
                    this.currentState = transition.nextState;
                    let currentAnimation = this.stateAnimations[this.currentState];
                    currentAnimation.restart();
                    clearInterval(this.clock);
                    this.clock = setInterval(() => this.updateAnimations(), currentAnimation.deltaTime);
                }
            }
        }
    }

    verifyLambdaTransitions(){
        let animation = this.stateAnimations[this.currentState];
        let possibleTransitions = this.transitions[this.currentState];
        if(typeof(possibleTransitions) !== "undefined"){
            for(let transition of possibleTransitions){
                if(transition.inputEvent == ""){
                    if(animation.spriteSheet.currentIndex == animation.spriteSheet.finalIndex){ //lamba transitions
                        if(animation.active){
                            animation.active = false;
                        }
                        else {
                          this.currentState = transition.nextState;
                          let currentAnimation = this.stateAnimations[this.currentState];
                          currentAnimation.restart();
                          clearInterval(this.clock);
                          this.clock = setInterval(() => this.updateAnimations(), currentAnimation.deltaTime);
                        }
                    }
                }
            }
        }
    }

    idleDynamics(){
        let animation = this.stateAnimations[this.currentState];
        if(animation.active == false){
            if(Math.random()*10 > 9.8){ //random blinks//
                animation.active = true;
            }
        }
        else if(animation.spriteSheet.currentIndex == animation.spriteSheet.finalIndex){
            animation.restart();
            animation.active = false;
        }
    }

    addTransition(previousState, inputEvent, inputCode, nextState){
        let transition = new Transition(inputEvent, inputCode, nextState);
        if(typeof(this.transitions[previousState]) === "undefined"){
            this.transitions[previousState] = [];
        }
        this.transitions[previousState].push(transition);
    }

    addStateAnimation(name, animation){
        this.stateAnimations[name] = animation;
    }

    updateSize(){
        let currentAnimation = this.stateAnimations[this.currentState];
        let idleAnimation = this.stateAnimations["idle"];

        let rx = currentAnimation.spriteSheet.size.x/idleAnimation.spriteSheet.size.x;
        let ry = currentAnimation.spriteSheet.size.y/idleAnimation.spriteSheet.size.y;

        this.htmlElement.style.width = this.size.x*rx + "%";
        this.htmlElement.style.height = this.size.y*ry + "%";
    }

    updateAnimations(){
        if(this.currentState == "idle"){ this.idleDynamics(); }

        let animation = this.stateAnimations[this.currentState];

        this.updateSize();
        this.htmlElement.src = animation.spriteSheet.getSource();

        animation.updateAnimation();
        this.verifyLambdaTransitions();
    }
}
