import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import DataBindingDemoScreen from "./data.binding.demo.screen";
import DataBindingDemoComponent from "./data.binding.demo.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [],
    declarations: [
        DataBindingDemoComponent,
        DataBindingDemoScreen
    ],
    exports: [],
})
export default class DataBindingModule {
}