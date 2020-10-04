

class EventCopy{
    constructor(eventName,eventFunction,element, func = function () {}){
        this.eventName = eventName;
        this.eventFunction = eventFunction;
        this.element = element;
        this.func = func;
        element.addEventListener(eventName,eventFunction);
    }
    remove(){
        this.func();
        this.element.removeEventListener(this.eventName,this.eventFunction);
    }
}