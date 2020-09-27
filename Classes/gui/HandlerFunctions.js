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
                mainHandler.removePickedEventListeners();
                handlerFunctions.moveCameraHandler.bind(world.visual)();

        }
    }
    moveCameraHandler(event){
        console.log('pick');
        if (this.zoom.worldVisaul.hasBalltoView){
            console.log('here');
            console.log(this.zoom.centerPos.x, this.zoom.centerPos.y);
            this.zoom.centerPos = new Pos(this.zoom.centerPos.x,this.zoom.centerPos.y);
        } else {
            this.zoom.centerPos = new Pos(0,0);
        }
        this.zoom.worldVisaul.hasBalltoView = false;
        this.zoom.worldVisaul.ballToView = 0;

        let thisSave = this;
        let lastPoint;
        let grabStartEvent;
        let grabMoveEvent;
        let grabEndEvent;

        function addGrabEvent() {

            mainHandler.removePickedEventListeners();
            grabStartEvent = new EventCopy('mousedown', grabStart,window);

            mainHandler.addToPickedEventListeners(grabStartEvent);
        }
        addGrabEvent();

        function grabStart(event){
            lastPoint = new Pos(thisSave.zoom.getRealX(event.offsetX), thisSave.zoom.getRealY(event.offsetY));
            grabMoveEvent = new EventCopy('mousemove', grabMove, window);
            grabEndEvent = new EventCopy('mouseup', grabEnd, window);

            mainHandler.addToPickedEventListeners(grabMoveEvent,grabEndEvent);


        }
        function grabMove(event){

            let grabNewPoint = new Pos(thisSave.zoom.getRealX(event.offsetX), thisSave.zoom.getRealY(event.offsetY));
            thisSave.zoom.centerPos.x += lastPoint.x-grabNewPoint.x;
            thisSave.zoom.centerPos.y += lastPoint.y-grabNewPoint.y;
        }
        function grabEnd(event){

            mainHandler.removePickedEventListeners();

            addGrabEvent();
        }
    }

}

let handlerFunctions = new HandlerFunctions();