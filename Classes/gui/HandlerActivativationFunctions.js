// Avtivation function of event handlers (listeners) which
// dont need to do smth with event

// Такие функции активации ивент хэндлеров (листенеров) в которых
// не требуется праводить операции с иветном

class HandlerActivativationFunctions {
    clickHandler(){
        console.log('123');
        if (this.ball !== 0){
            this.world.visual.hasBalltoView = true;
            this.world.visual.ballToView = this.ball;
        }
    }
}
let handlerActivationFunctions = new HandlerActivativationFunctions();