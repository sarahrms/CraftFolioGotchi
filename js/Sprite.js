class Vector2D {
  contructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Sprite {
  constructor(sourcePath, spriteName, format, dimension){
    this.sourcePath = sourcePath;
    this.spriteName = spriteName;
    this.format = format;
    this.dimension = dimension;
  }

  getSource() {
    return sourcePath + "/" + spriteName + "." + format;
  }
}


class AnimatedSprite {
  constructor(sourcePath, animationName, format, dimension, initialIndex, finalIndex) {
    this.sourcePath = sourcePath;
    this.animationName = animationName;
    this.format = format;
    this.dimension =  dimension;
    this.currentIndex = initialIndex;
    this.finalIndex = finalIndex;

    this.sprites = [];
    for (let index of range(initialIndex, finalIndex)){
      this.sprites[index] = new Sprite(sourcePath, animationName + "_" + currentIndex, format;
    }
  }

  updateSprite(){
    if (currentIndex < finalIndex){
      currentIndex ++;
    }
    else {
      currentIndex = initialIndex;
    }
  }

  getSource() {
    return this.sprites[currentIndex].getSource();
  }
}
