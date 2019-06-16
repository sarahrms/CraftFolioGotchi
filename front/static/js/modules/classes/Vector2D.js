export class Vector2D {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    sum(vetor){
    	this.x += vetor.x;
    	this.y += vetor.y;
    }

    sub(vetor){
    	this.x -= vetor.x;
    	this.y -= vetor.y;
    }
}