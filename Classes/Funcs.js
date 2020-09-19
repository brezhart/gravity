class Funcs{

    distPos(pos1,pos2){
        return Math.hypot(pos1.x-pos2.x,pos1.y - pos2.y);
    }
    dist(x1,y1,x2,y2){
        return Math.hypot(x2-x1,y2-y1);
    }
    random(min, max) {
        return min + Math.random() * (max - min);
    }
    randomInt(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    angle(cx, cy, ex, ey) {
        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx);

        return theta;
    }
    angle360(cx, cy, ex, ey) {
        var theta = this.angle(cx, cy, ex, ey); // range (-180, 180]
        if (theta < 0) theta = 2*Math.PI + theta; // range [0, 360)
        return theta;
    }
    canvasCreator(size){
        let canvas = document.createElement('canvas');
        canvas.width = size.w;
        canvas.height = size.h;
        return canvas;
    }


}
let funcs = new Funcs();