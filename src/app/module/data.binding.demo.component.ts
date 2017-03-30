import {Component, Input} from "@angular/core";

@Component({
    selector: "data-binding-demo-component",
    template: `
		<p>
			|| bound object :: {{boundObjectValue}}|| bound string :: {{boundStringValue}}||
		</p>
    `
})
export default class DataBindingDemoComponent {
    @Input() boundObjectValue: string;
    @Input() boundStringValue: string;
}