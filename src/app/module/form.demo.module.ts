import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import FormDemoComponent from "./form.demo.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        FormDemoComponent
    ],
})
export default class FormDemoModule {
}