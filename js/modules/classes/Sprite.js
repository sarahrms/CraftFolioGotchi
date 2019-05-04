export class Sprite {
    constructor(sourcePath, spriteName, format, size){
        this.sourcePath = sourcePath;
        this.spriteName = spriteName;
        this.format = format;
        this.size = size;
    }

    getSource() {
        return this.sourcePath + "/" + this.spriteName + "." + this.format;
    }

    updateSourcePath(sourcePath){
    	this.sourcePath = sourcePath;
    }
}