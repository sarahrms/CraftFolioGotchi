const LeftArrow = 37;
const RightArrow = 39;
const UpArrow = 38;
const WalkVelocity = 10;
const JumpAceleration = 30;

class Transition {
    constructor(inputState, inputCode, nextState){
        this.inputState = inputState;
        this.inputCode = inputCode;
        this.nextState = nextState;
    }
}

class Animation {
    constructor(animatedSprite, deltaTime){
        this.animatedSprite = animatedSprite;
        this.deltaTime = deltaTime;
    }
}

class Character {
    constructor(color, position, dimension, controllable, htmlElementID){
        this.color = color;

        this.position = position;
        this.velocity = new Vector2D(0, 0);
        this.aceleration = new Vector2D(0, 0);
        this.scale = new Vector2D(1, 1);
        this.dimension = dimension;

        this.jumping = false;
        this.controllable = controllable;

        this.stateAnimations = []; //[name] = AnimatedSprite, delta;
        this.transitions = [];

        this.htmlElement = document.getElementById(htmlElementID);
        this.htmlElement.style.width = this.dimension.x + "px";
        this.htmlElement.style.height = this.dimension.y + "px";
    }

    updatePosition(gravity, scale, floorHeight){
        this.aceleration.y += gravity*scale;
        this.velocity.x += this.aceleration.x;
        this.velocity.y += this.aceleration.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.y < floorHeight){
            this.jumping = false;
            this.aceleration.y = 0;
            this.velocity.y = 0;
            this.position.y = floorHeight;
        }

        this.htmlElement.style.transform = "translate(" + this.position.x + "px, " + -this.position.y +"px) "
                  + "scale(" + this.scale.x + ", " + this.scale.y + ")"; //y upside-down//
    }

    setInitialState(state){
        this.currentState = state;
        let deltaTime = this.stateAnimations[this.currentState].deltaTime;
        this.clock = setInterval(() => this.updateAnimation(), deltaTime);
    }

    updateAceleration(inputState, inputCode){
        if(this.controllable == true){
            if(inputState == "keydown"){
                switch(inputCode){
                    case LeftArrow: {
                        this.velocity.x = -WalkVelocity;
                        this.scale.x = -1;
                        break;
                    }
                    case RightArrow: {
                        this.velocity.x = WalkVelocity;
                        this.scale.x = 1;
                        break;
                    }
                    case UpArrow:{
                        if(this.jumping == false) {
                            this.jumping = true;
                            this.aceleration.y = JumpAceleration;
                        }
                        break;
                    }
                }
            }
            else if(inputState == "keyup"){
                switch(inputCode){
                    case LeftArrow:
                    case RightArrow: {
                        this.velocity.x = 0;
                        break;
                    }
                }
            }
        }
    }

    verifyTransitions(inputState, inputCode){
        let possibleTransitions = this.transitions[this.currentState];
        if(typeof(possibleTransitions) !== "undefined"){
            for(let transition of possibleTransitions){
                if(transition.inputState == inputState & transition.inputCode == inputCode){
                    this.currentState = transition.nextState;
                    clearInterval(this.clock);
                    let deltaTime = this.stateAnimations[this.currentState].deltaTime;
                    this.clock = setInterval(() => this.updateAnimation(), deltaTime);
                }
            }
        }
    }

    verifyLambdaTransitions(animation){
        let possibleTransitions = this.transitions[this.currentState];
        if(typeof(possibleTransitions) !== "undefined"){
            for(let transition of possibleTransitions){
                if(transition.inputState == ""){
                    if(animation.animatedSprite.currentIndex == animation.animatedSprite.finalIndex){ //lamba transitions
                        this.currentState = transition.nextState;
                        clearInterval(this.clock);
                        this.clock = setInterval(() => this.updateAnimation(), animation.deltaTime);
                    }
                }
            }
        }
    }

    idleDynamics(animation){
        if(animation.animatedSprite.active == false){
            if(Math.random()*10 > 9.8){ //random blinks//
                animation.animatedSprite.active = true;
            }
        }
        else if(animation.animatedSprite.currentIndex == animation.animatedSprite.initialIndex){
            animation.animatedSprite.active = false;
        }
    }

    addTransition(previousState, inputState, inputCode, nextState){
        let transition = new Transition(inputState, inputCode, nextState);
        if(typeof(this.transitions[previousState]) === "undefined"){
            this.transitions[previousState] = [];
        }
        this.transitions[previousState].push(transition);
    }

    addStateAnimation(name, animatedSprite, deltaTime){
        let animation = new Animation(animatedSprite, deltaTime);
        this.stateAnimations[name] = animation;
    }

    updateAnimation(){
        let animation = this.stateAnimations[this.currentState];
        if(this.currentState == "idle"){
            this.idleDynamics(animation);
        }
        this.verifyLambdaTransitions(animation);
        animation.animatedSprite.updateSprite();
        this.htmlElement.src = animation.animatedSprite.getSource();
    }
}
