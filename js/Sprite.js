class Vector2D {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Sprite {
    constructor(sourcePath, spriteName, format, size){
        this.sourcePath = sourcePath;
        this.spriteName = spriteName;
        this.format = format;
        this.size = size;
    }

    getSource() {
        return this.sourcePath + "/" + this.spriteName + "." + this.format;
    }
}

class SpriteSheet {
    constructor(sourcePath, animationName, format, size, initialIndex, finalIndex){
        this.sourcePath = sourcePath;
        this.animationName = animationName;
        this.format = format;
        this.size = size;
        this.currentIndex = initialIndex;
        this.initialIndex = initialIndex;
        this.finalIndex = finalIndex;

        this.sprites = [];
        for (let index of range(initialIndex, finalIndex)){
            this.sprites[index] = new Sprite(sourcePath, animationName + "_" + index, format, size);
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
