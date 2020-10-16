
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
world.addBall(new Pos( 0, 0 ), new Speed(0, 0 * Math.PI), 10000, 30,'#312332', false, true);
// world.addClaster(new Pair(-340,-300), new Pair(-180,-140),100, new Speed(3, 0*Math.PI),10, 3, "random", false, true);
world.addGalaxy(new Pos(-300,-150), new Speed(1,0), 3000, 50,'random', 70, 200,new Pair(1,2));

world.addGalaxy(new Pos(300,150), new Speed(1,Math.PI), 3000, 50, 'random',100, 200,new Pair(1,2));

mainHandler.connectToWorld(world);

let fpsCounter = document.getElementById('fps');


let iter = 0;
let lastTimeCalled = 0;
function loop(){
    if (!world.isPaused) {
        world.tick();
    }
    mainHandler.pickBall();
    world.visual.mainWorldDraw();
    iter++;

    let timeNow = Date.now();
    let diff = timeNow-lastTimeCalled;
    lastTimeCalled = timeNow;
    if (!(iter%10)){
        fpsCounter.innerText = ~~(1/(diff/1000));
    }

    window.requestAnimationFrame(loop);
};
loop();