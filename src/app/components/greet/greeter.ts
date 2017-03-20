import {SpeechService} from "../../service/speech/speech.service"

export interface Greeter {
	greeting:string;
	goodbye?:string;
	getGreeting():string;
	sayGreeting(event:Event):void;
}

export abstract class AbstractGreeter implements Greeter {
	greeting:string;

	private speechService:SpeechService;

	constructor(speechService:SpeechService) {
		this.speechService = speechService;
	}

	getGreeting():string {
		return this.greeting;
	}

	sayGreeting(event:Event) {
		// console.log("Saying: \"" + this.greeting + "\"...");
		this.speechService.say(this.greeting);
		event.stopPropagation();
		return false;
	}
}