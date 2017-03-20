import {Component} from "@angular/core";
import {AbstractGreeter} from "./greeter";
import {SpeechService} from "../../service/speech/speech.service";

@Component({
    selector: "hi-greeter",
    /*
     * ANGULAR1: we would use directives instead of one-way binding (click)
     * <button ng-click="vm.toggleImage()">
     * <button ng-click="vm.toggleImage($event)">
     */
    template: "<span (click)='sayGreeting($event)'>{{intro}}, <ng-content></ng-content>, =)</span>"
})
export class HiGreeter extends AbstractGreeter {

    private intro:string = "Hi";

    constructor(speechService:SpeechService) {
        super(speechService);
        this.greeting = this.intro;
    }

}
