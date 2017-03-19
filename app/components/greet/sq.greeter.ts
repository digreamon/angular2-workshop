import {Component, Input, Directive} from "@angular/core";
import {AbstractGreeter} from "./greeter";
import {SpeechService} from "../../service/speech/speech.service";


// Important !!!! must be declared BEFORE the @Component
@Directive({
	selector: '[logger]',
	host: {
		'(click)': 'onInput()'
	}
})
class LogDirective {
	@Input("logger") message:string;
	onInput() {
		console.log("Saying: \"" + this.message + "\"...");
	}
}

@Component({
	selector: "sq-greeter",
	directives: [LogDirective],
	/*
	 * ANGULAR1: we would use directives instead of one-way binding
	 * <button ng-click="vm.toggleImage()">
	 * <button ng-click="vm.toggleImage($event)">
	 */
	template: "<img alt='{{title}}' title='{{title}}' src='img/sq_logo.png' (click)='sayGreeting($event)' logger='{{greeting}}'>"
})
export class SqGreeter extends AbstractGreeter {

	private title:string = "Swissquote - The Swiss Leader in Online Banking";

	@Input() greeting:string = "This is " + this.title;

	constructor(speechService:SpeechService) {
		super(speechService);
	}
}