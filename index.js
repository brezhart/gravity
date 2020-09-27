


let canvasCont = document.getElementById('canvasCont');
let w = window.innerWidth;
let h = window.innerHeight;
let viewH = window.innerHeight;
let viewW  = window.innerWidth;
canvasCont.style.width = w + "px";
canvasCont.style.height = h + "px";

let world = new World();
let mainHandler = new MainHandler(w,h,canvasCont);

world.initVisual(world, new Size(w,h), canvasCont);
// world.addBall(new Pos( 0, 0 ), new Speed(0, 0 * Math.PI), 10000, 30,'black', false, true);
// world.addClaster(new Pair(-340,-300), new Pair(-180,-140),200, new Speed(3, 0*Math.PI),10, 3, "random", false, true);


world.addGalaxy(new Pos(-300,-150), new Speed(1,0), 3000, 50,'red', 70, 200,new Pair(1,2));

world.addGalaxy(new Pos(300,150), new Speed(1,Math.PI), 3000, 50, 'blue',70, 200,new Pair(1,2));
console.log(world.balls);


mainHandler.connectToWorld(world);

iter = 0;

function loop(){
    if (!world.isPaused) {
        world.tick();
    }
    mainHandler.pickBall();
    world.visual.mainWorldDraw();
    iter++;
    window.requestAnimationFrame(loop)
};
loop();

//
// loop();






