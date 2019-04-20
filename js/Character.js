class Transition {
    constructor(input, nextState){
      this.input = input;
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
    constructor(color, position, velocity, dimension){
        this.color = color;
        this.position = position;
        this.velocity = velocity;
        this.dimension = dimension;
        this.stateAnimations = []; //[name] = AnimatedSprite, delta;
        this.transitions = [];
        this.htmlElement = document.getElementById("mainCharacter");
    }

    updatePosition(gravity, scale, floorHeight){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y - gravity*scale;
        if(this.position.y < floorHeight){
            this.position.y = floorHeight;
        }
    }

    setInitialState(state){
        this.currentState = state;
    }

    updateState(input, clock){
      let possibleTransitions = this.transitions[this.currentState];
      for (let transition of possibleTransitions){
        if (transition.input == input){
          this.currentState = transition.nextState;
          let animation = this.stateAnimations[this.currentState];
          clearInterval(clock);
          return setInterval(this.updateAnimation, animation.deltaTime);
        }
      }

      console.log("update state AHHHHHH", this.stateAnimations, this.currentState);
    }

    addTransition(previousState, input, nextState){
        let transition = new Transition(input, nextState);
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
        animation.animatedSprite.updateSprite();
        this.htmlElement.src = animation.animatedSprite.getSource();
    }
}
