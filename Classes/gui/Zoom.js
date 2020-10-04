class Zoom{
    constructor(world){
        this.worldVisaul = world;
        this.zoomCoef = 1;
        this.centerPos = new Pos(0,0);
        this.locked = false;
        window.addEventListener('wheel', this.zooming.bind(this));
    }
    zooming(event){
        if (!this.locked) {
            let mult = 1 + (Math.sqrt(Math.abs(event.deltaY)) / 100 * (event.deltaY) / (Math.abs(event.deltaY)));
            this.multiplyZoom(mult);
        }
    }
    multiplyZoom(mult){
        this.zoomCoef*=mult;
    }
    getVisualX(x){
        return x*this.zoomCoef + this.worldVisaul.size.w/2 - this.centerPos.x*this.zoomCoef;
    }
    getVisualY(y){
        return y*this.zoomCoef + this.worldVisaul.size.h/2 - this.centerPos.y*this.zoomCoef;
    }
    getVisualPos(pos){
        return new Pos(this.getVisualX(pos.x), this.getVisualY(pos.y))
    }
    getVisualRadius(radius){
        return  radius*this.zoomCoef;
    }
    getRealX(x){
        return (x - this.worldVisaul.size.w/2 + this.centerPos.x*this.zoomCoef)/this.zoomCoef
    }
    getRealY(y){
        return (y - this.worldVisaul.size.h/2 + this.centerPos.y*this.zoomCoef)/this.zoomCoef
    }
    getRealPos(pos){
        return new Pos(this.getRealX(pos.x),this.getRealY(pos.y));
    }
    lockUp(){
        this.locked = true;
    }
    lockDown(){
        this.locked = false;
    }
}