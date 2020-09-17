


let canvasCont = document.getElementById('canvasCont');
let w = window.innerWidth;
let h = window.innerHeight;
canvasCont.style.width = w + "px";
canvasCont.style.height = h + "px";

let world = new World();
world.initVisual(world, new Size(w,h), canvasCont);
world.addBall(new Pos(  w/2,h/2), new Speed(0,0), 10000, 30, false, true);
world.addClaster(new Pair(w/2-(w/4)-w/50,w/2-(w/4)+w/50), new Pair(h/2-(h/5)-h/50,h/2-(h/5)+h/50),200, new Speed(3,0*Math.PI),10, 2, false, true);
console.log(world.balls);
iter = 0;
(function loop(){
    world.tick();
    world.visual.mainWorldDraw();
    iter++;
    window.requestAnimationFrame(loop)
}());

//
// loop();






