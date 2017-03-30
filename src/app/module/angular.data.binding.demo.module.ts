import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import AngularDataBindingDemoScreen from "./angular.data.binding.demo.screen";
import AngularDataBindingDemoComponent from "./angular.data.binding.demo.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [],
    declarations: [
        AngularDataBindingDemoComponent,
        AngularDataBindingDemoScreen
    ],
    exports: [],
})
export default class AngularDataBindingModule {
}