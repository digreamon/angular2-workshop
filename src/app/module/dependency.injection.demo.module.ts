import {NgModule} from "@angular/core";
import {Dependency, DependencyImpl1, DependencyImpl2} from "./dependency.injection.demo.injectable";
import AngularDependencyInjectionDemoScreen from "./dependency.injection.demo.screen";

@NgModule({
    imports: [],
    providers: [
        {provide: Dependency, useClass: DependencyImpl1}
    ],
    declarations: [
        AngularDependencyInjectionDemoScreen
    ],
    exports: [],
})
export default class AngularDependencyInjectionDemoModule {
}