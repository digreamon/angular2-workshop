import {Injectable} from "@angular/core";
import {} from "../../lib/webspeechapi.d";

@Injectable()
export class SpeechService {
	private speaker:SpeechSynthesisUtterance;

	constructor() {
		var interval = setInterval(function () {
			var voices = speechSynthesis.getVoices();
			if (voices.length) clearInterval(interval); else return;
		}, 10);
	}

	public say(text:string) {
		this.speaker = new SpeechSynthesisUtterance(SpeechService.getSpeech(text));
		this.speaker.voice = speechSynthesis.getVoices()[3];
		speechSynthesis.speak(this.speaker);
	}

	private static getSpeech(text:string):string {
		return text.replace(/[-,]/g, "...................");
	}
}