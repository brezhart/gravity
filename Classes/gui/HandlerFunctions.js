// Activation function of event handlers (listeners) which
// need to do smth with event

// Такие функции активации ивент хэндлеров (листенеров) в которых
// требуется праводить операции с иветном

class HandlerFunctions {
    keyBoardHandler(event) {
        switch (event.code) {
            case "KeyE":
                if (this.world.isPaused) {
                    this.world.continueGame();
                } else {
                    this.world.stopGame();
                }
                break;
            case "KeyQ":
                this.world.visual.hasBalltoView = false;
                this.world.visual.zoom.centerPos = new Pos(0, 0);
                break;
            case "KeyR":
                console.log("KEY R");
                mainHandler.removePickedEventListeners();
                mainHandler.addBallPickerEvent();
                break;
            case "KeyT":
                console.log('KEY T');
                mainHandler.removePickedEventListeners();
                handlerFunctions.moveCameraHandler.bind(world.visual)();
                break;
            case "KeyA":
                console.log("KEY A");
                mainHandler.removePickedEventListeners();
                handlerFunctions.makeBallHandler.bind(world.visual)();


        }
    }

    moveCameraHandler(event) {
        console.log('pick');

        if (this.zoom.worldVisaul.hasBalltoView) {
            this.zoom.centerPos = new Pos(this.zoom.centerPos.x, this.zoom.centerPos.y);
        } // If we world has ball to view, this.zoom.centerPos is linked to ball pos. This condition unlink it

        this.zoom.worldVisaul.hasBalltoView = false;
        this.zoom.worldVisaul.ballToView = 0;

        let thisSave = this;
        let lastPoint;

        function grabStart(pos) {
            console.log(pos);
            lastPoint = thisSave.zoom.getRealPos(pos);
        }

        function grabMove(pos) {
            let grabNewPoint = new Pos(thisSave.zoom.getRealX(pos.x), thisSave.zoom.getRealY(pos.y));
            thisSave.zoom.centerPos.x += lastPoint.x - grabNewPoint.x;
            thisSave.zoom.centerPos.y += lastPoint.y - grabNewPoint.y;
        }

        function grabEnd(event) {

        }

        funcs.dragAndDrop(grabStart, grabMove, grabEnd);
    }

    makeBallHandler(event) {
        console.log("START");

        let startPos = new Pos(0, 0);
        let speedPos = new Pos(0, 0);
        let thisSave = this;

        function grabStart(pos) {
            thisSave.zoom.lockUp();
            startPos = thisSave.zoom.getRealPos(pos);
            speedPos = thisSave.zoom.getRealPos(pos);
            console.log(startPos.x, startPos.y);
            thisSave.arc(thisSave.secondContext, startPos.x, startPos.y, 10);
        }

        function grabMove(pos) {
            speedPos = thisSave.zoom.getRealPos(pos);
            thisSave.clear(thisSave.secondContext);
            thisSave.arc(thisSave.secondContext, startPos.x, startPos.y, 10);

            let parts = 100;
            let ball = new Ball(new Pos(startPos.x, startPos.y), new Speed(Math.max(funcs.distPos(startPos, speedPos), 1) / 10, funcs.angle360(startPos.x, startPos.y, speedPos.x, speedPos.y) + Math.PI), 1, 1);
            let lastPos = new Pos(startPos.x, startPos.y);
            ball.world = world;
            for (let i = 0; i < parts; i++) {
                ball.updateSpeed();
                ball.updatePos();
                thisSave.line(thisSave.secondContext, lastPos, ball.pos);
                lastPos.x = ball.pos.x;
                lastPos.y = ball.pos.y;
            }
            thisSave.line(thisSave.secondContext, startPos, speedPos, 'red');

        }

        function grabEnd(event) {
            thisSave.clear(thisSave.secondContext);
            thisSave.zoom.lockDown();
            world.addBall(startPos, new Speed(Math.max(funcs.distPos(startPos, speedPos), 1) / 10, funcs.angle360(startPos.x, startPos.y, speedPos.x, speedPos.y) + Math.PI), 1000, 10);

        }

        funcs.dragAndDrop(grabStart, grabMove, grabEnd);

    }

}

let handlerFunctions = new HandlerFunctions();