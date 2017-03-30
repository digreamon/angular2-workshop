import {Component} from "@angular/core";
import {Dependency} from "./dependency.injection.demo.injectable";

@Component({
    selector: "dependency-injection-demo",
    templateUrl: "app/module/dependency.injection.demo.screen.html",
})
export default class DependencyInjectionDemoScreen {
    public dependencyValue: string;

    constructor(private dependency: Dependency) {
        this.dependencyValue = this.dependency.getValue();
    }
}