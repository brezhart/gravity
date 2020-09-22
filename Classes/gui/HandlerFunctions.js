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
        }
    }

}

let handlerFunctions = new HandlerFunctions();