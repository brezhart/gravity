

class EventCopy{
    constructor(eventName,eventFunction,element){
        this.eventName = eventName;
        this.eventFunction = eventFunction;
        this.element = element;
        element.addEventListener(eventName,eventFunction);
    }
    remove(){
        this.element.removeEventListener(this.eventName,this.eventFunction);
    }
}