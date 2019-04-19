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
        return this.sourcePath + "/" + this.spriteName + "." + this.format;
    }
}

class AnimatedSprite {
  constructor(sourcePath, animationName, format, dimension, initialIndex, finalIndex) {
    this.sourcePath = sourcePath;
    this.animationName = animationName;
    this.format = format;
    this.dimension = dimension;
    this.currentIndex = initialIndex;
    this.initialIndex = initialIndex;
    this.finalIndex = finalIndex;

    this.sprites = [];
    for (let index of range(initialIndex, finalIndex)){
      this.sprites[index] = new Sprite(sourcePath, animationName + "_" + index, format);
    }
  }

  updateSprite(){
    if (this.currentIndex < this.finalIndex){
      this.currentIndex += 1;
    }
    else {
      this.currentIndex = this.initialIndex;
    }
  }

  getSource() {
    return this.sprites[this.currentIndex].getSource();
  }
}

function range(a, b){
  let i = a;
  let ans = [];
  while (i <= b) {
      ans.push(i);
      i++;
  }
  return ans;
}
