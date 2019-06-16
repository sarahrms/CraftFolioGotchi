export class Transition {
    constructor(inputEvent, inputCode, nextState){
        this.inputEvent = inputEvent;
        this.inputCode = inputCode;
        this.nextState = nextState;
    }
}