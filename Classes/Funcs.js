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
    canvasCreator(size, parent){
        let canvas = document.createElement('canvas');
        canvas.width = size.w;
        canvas.height = size.h;
        let ctx = canvas.getContext('2d');
        parent.appendChild(canvas);
        return ctx;
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    addTwoSpeed(speed1, speed2,coef1 = 1, coef2 = 1){
        let x = Math.cos(speed1.ang) * speed1.val * coef1 + Math.cos(speed2.ang) * speed2.val * coef2;
        let y = Math.sin(speed1.ang) * speed1.val * coef1 + Math.sin(speed2.ang) * speed2.val * coef2;
        let speedOut = new Speed(funcs.dist(0, 0, x, y),funcs.angle360(0, 0, x, y));
        return speedOut;
    }
    dragAndDrop(start,move,end,removeFunc = function(){},element = window) {
        function setDragAnDrop() {
            mainHandler.addToPickedEventListeners(new EventCopy('mousedown',startDragAndDrop,element,removeFunc))
        }
        function startDragAndDrop(event) {
            start(new Pos(event.offsetX,event.offsetY));
            mainHandler.addToPickedEventListeners(new EventCopy('mousemove', moveDragAndDrop,element,removeFunc));
            mainHandler.addToPickedEventListeners(new EventCopy('mouseup', endDrogAndDrop,element,removeFunc));
        }
        function moveDragAndDrop() {
            move(new Pos(event.offsetX,event.offsetY));

        }
        function endDrogAndDrop() {
            mainHandler.removePickedEventListeners();
            end();
            setDragAnDrop();
        }
        setDragAnDrop();
    }
    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        console.log("HEX", hex)
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }



}
let funcs = new Funcs();

