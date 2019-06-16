export class Animation {
    constructor(spriteSheet, deltaTime, active){
        this.spriteSheet = spriteSheet;
        this.deltaTime = deltaTime;
        this.active = active;
    }

    updateAnimation(){
      if(this.active){
        this.spriteSheet.updateSprite();
      }
    }

    restart(){
      this.spriteSheet.currentIndex = this.spriteSheet.initialIndex;
      this.active = true;
    }
}