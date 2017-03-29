import {Component, ViewChild, AfterViewInit, Input} from "@angular/core";
import {HiGreeter} from "../greet/hi.greeter";
import {SqGreeter} from "../greet/sq.greeter";
import {SpeechService} from "../../service/speech/speech.service";

@Component({
    selector: "speech-screen",
    // can't do <greeter/> because of html5 specs :: https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-20
    // <sq-greeter greeting='Custom greeting'></sq-greeter> for custom parameter, only if field is decorated with @Input()
    template: `<h3>
                   <hi-greeter>
                        <sq-greeter></sq-greeter>
                   </hi-greeter>
               </h3>
               <div class="input-group">
                  <span class="input-group-btn">
                    <button (click)="say()" type="button" class="btn btn-default">&nbsp;&nbsp;Say&nbsp;&nbsp;</button>
                  </span>
                  <input [(ngModel)]="speech" type="text" class="form-control" id="usr" placeholder="Say something">
               </div>`
})
export default class SpeechScreen implements AfterViewInit {
    @Input() speech: string = "";
    @ViewChild(HiGreeter) hiGreeter: HiGreeter;
    @ViewChild(SqGreeter) sqGreeter: SqGreeter;

    constructor(private speechService: SpeechService) {

    }

    say() {
        if (this.speech) {
            this.speechService.say(this.speech);
        }
    }

    ngAfterViewInit() {
        this.hiGreeter.greeting = this.hiGreeter.greeting + ", " + this.sqGreeter.greeting;
    }
}