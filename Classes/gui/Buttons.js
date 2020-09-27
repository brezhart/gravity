
    // selectGrabbing(){
    //     mainHandler.removeClick();
    //     console.log("NEW");
    //     this.zoom.centerPos = new Pos(0,0);
    //     this.zoom.worldVisaul.hasBalltoView = false;
    //     this.zoom.worldVisaul.ballToView = 0;
    //     let t = this;
    //     window.addEventListener('mousedown', grabStart);
    //     function grabStart(event){
    //         console.log("new Down");
    //         t.grabLastPoint = new Pos(t.zoom.getRealX(event.offsetX), t.zoom.getRealY(event.offsetY));
    //         window.addEventListener('mousemove', grabMove);
    //         window.addEventListener('mouseup', grabEnd);
    //     }
    //     function grabMove(event){
    //         console.log("STILL");
    //         let grabNewPoint = new Pos(t.zoom.getRealX(event.offsetX), t.zoom.getRealY(event.offsetY));
    //         t.zoom.centerPos.x += t.grabLastPoint.x-grabNewPoint.x;
    //         t.zoom.centerPos.y += t.grabLastPoint.y-grabNewPoint.y;
    //     }
    //     function grabEnd(event){
    //         console.log("UP");
    //         window.removeEventListener('mousemove', grabMove);
    //         window.removeEventListener('mouseup', grabEnd);
    //     }
    //
    //
    //
    // }
