class Zoom{
    constructor(world){
        this.worldVisaul = world;
        this.zoomCoef = 1;
        this.centerPos = new Pos(0,0);
        window.addEventListener('wheel', this.zooming.bind(this));
        this.buttons = new Buttons(this);
    }



    zooming(event){
        let mult = 1 + (Math.sqrt(Math.abs(event.deltaY))/100 * (event.deltaY)/(Math.abs(event.deltaY)));
        this.multiplyZoom(mult);
        console.log(mult,this.zoomCoef);
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
    getVisualRadius(radius){
        return  radius*this.zoomCoef;
    }

    getRealX(x){
        return (x - this.worldVisaul.size.w/2 + this.centerPos.x*this.zoomCoef)/this.zoomCoef
    }
    getRealY(y){
        return (y - this.worldVisaul.size.h/2 + this.centerPos.y*this.zoomCoef)/this.zoomCoef
    }



}