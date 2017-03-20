import {Directive, Input} from "@angular/core";

@Directive({
    selector: '[logger]',
    host: {
        '(click)': 'onInput()'
    }
})
export class LogDirective {
    @Input("logger") message: string;

    onInput() {
        console.log("Saying: \"" + this.message + "\"...");
    }
}