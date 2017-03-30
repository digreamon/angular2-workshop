import {Component, Input} from "@angular/core";
@Component({
    selector: "data-binding-demo",
    templateUrl: "app/module/data.binding.demo.screen.html",
})
export default class DataBindingDemoScreen {
    public buttonDisabled: boolean = true;
    public buttonTextColor: string = "red";
    public imageSrc: string = "../../assets/trend_up.png";
    public classes: string = "btn btn-primary";
    public bindComponentValue: string = "TEST_BIND_OBJECT";
    public injectionSanitizing = "Template <script>alert('evil never sleeps')</script> Syntax";

    @Input() public twoWayBindingValue: string = "initial value";

    onEvent(): void {
        alert("Event Binding Success!");
    }
}