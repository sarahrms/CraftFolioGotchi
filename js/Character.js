class Transition {
    constructor(input, nextState){
      this.input = input;
      this.nextState = nextState;
    }
}

class Character {
    constructor(color, position, velocity, dimension){
        this.color = color;
        this.position = position;
        this.velocity = velocity;
        this.dimension = dimension;
        this.stateAnimations = []; //[name] = AnimatedSprite;
        this.transitions = [];
        this.currentState = undefined;
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

    updateState(input){
      let transitions = this.transitions[this.currentState];
      for (let transition of transitions){
        if (transition.input == input){
          this.currentState = transition.nextState;
        }
      }
    }

    addTransition(previousState, input, nextState){
        let transition = new Transition(input, nextState);
        this.transitions[previousState].push(transition);
    }

    addStateAnimation (name, animation){
        this.stateAnimations[name] = animation;
    }

    updateAnimation(){
        this.stateAnimations[this.currentState].updateSprite();
        return this.stateAnimations[this.currentState].getSource();
    }
}
