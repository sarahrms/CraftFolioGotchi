const LeftArrow = 39;
const RightArrow = 37;
const UpArrow = 38;

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
        this.dimension = dimension;
        this.reflect = false;
        this.controllable = controllable;
        this.stateAnimations = []; //[name] = AnimatedSprite, delta;
        this.transitions = [];

        this.htmlElement = document.getElementById(htmlElementID);
        this.htmlElement.style.width = this.dimension.x;
        this.htmlElement.style.height = this.dimension.y;
    }

    updatePosition(gravity, scale, floorHeight){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.x += this.aceleration.x;
        this.velocity.y += this.velocity.y - gravity*scale;

        if(this.position.y < floorHeight){
            this.position.y = floorHeight;
        }
        this.htmlElement.style.transform.translate(this.position.x+"px", this.position.y+"px");
    }

    setInitialState(state){
        this.currentState = state;
    }

    updateAceleration(inputState, inputCode){
        if(this.controllable == true){
            if(inputState == "keydown"){
                switch(inputCode){
                    case LeftArrow: {

                        break;
                    }
                    case RightArrow: {

                        break;
                    }
                    case UpArrow:{

                        break;
                    }
                }
            }
            else if(inputState == "keyup"){
              switch(inputCode){
                  case LeftArrow: {

                      break;
                  }
                  case RightArrow: {

                      break;
                  }
                  case UpArrow:{

                      break;
                  }
              }
            }
        }
    }

    verifyTransitions(inputState, inputCode){
        let possibleTransitions = this.transitions[this.currentState];
        if (typeof(possibleTransitions) !== "undefined"){
            for (let transition of possibleTransitions){
                if (transition.inputState == inputState & transition.inputCode == inputCode){
                    this.currentState = transition.nextState;
                    let animation = this.stateAnimations[this.currentState];
                    return animation.deltaTime;
                }
            }
        }
        else {
          return this.stateAnimations[this.currentState].deltaTime;
        }
    }

    verifyLambdaTransitions(animation){
        let possibleTransitions = this.transitions[this.currentState];
        if (typeof(possibleTransitions) !== "undefined"){
            for (let transition of possibleTransitions){
                if(transition.inputState == ""){
                    if(animation.animatedSprite.currentIndex == animation.animatedSprite.finalIndex){ //lamba transitions
                        this.currentState = transition.nextState;
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
        else {
            if(animation.animatedSprite.currentIndex == animation.animatedSprite.initialIndex){
                animation.animatedSprite.active = false;
            }
        }
    }

    addTransition(previousState, inputState, inputCode, nextState){
        let transition = new Transition(inputState, inputCode, nextState);
        if (typeof(this.transitions[previousState]) === "undefined"){
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
        if (this.currentState == "idle") {
            this.idleDynamics(animation);
        }
        this.verifyLambdaTransitions(animation);
        animation.animatedSprite.updateSprite();
        this.htmlElement.src = animation.animatedSprite.getSource();
    }
}
