export class Cell{
    constructor(r,c){
        this.r = r;
        this.c = c;
        // 圆心需要加 0.5
        this.x = c + 0.5;
        this.y = r + 0.5;
    }
}