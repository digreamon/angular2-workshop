import {Component, Input} from "@angular/core";

@Component({
    selector: "angular-data-binding-demo-component",
    template: `
		<p>
			|| bound object :: {{boundObjectValue}}|| bound string :: {{boundStringValue}}||
		</p>
    `
})
export default class AngularDataBindingDemoComponent {
    @Input() boundObjectValue: string;
    @Input() boundStringValue: string;
}