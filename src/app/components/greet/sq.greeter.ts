import {Component, Input, Directive} from "@angular/core";
import {AbstractGreeter} from "./greeter";
import {SpeechService} from "../../service/speech/speech.service";

@Component({
    selector: "sq-greeter",
    /*
     * ANGULAR1: we would use directives instead of one-way binding
     * <button ng-click="vm.toggleImage()">
     * <button ng-click="vm.toggleImage($event)">
     */
    template: "<img alt='{{title}}' title='{{title}}' src='assets/sq_logo.png' (click)='sayGreeting($event)' logger='{{greeting}}'>"
})
export class SqGreeter extends AbstractGreeter {

    private title: string = "Swissquote - The Swiss Leader in Online Banking";

    @Input() greeting: string = "This is " + this.title;

    constructor(speechService: SpeechService) {
        super(speechService);
    }
}