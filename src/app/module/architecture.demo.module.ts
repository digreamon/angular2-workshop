import {NgModule} from "@angular/core";
import ArchitectureDemoScreen from "./architecture.demo.screen";

@NgModule({ // Defines a module that contains components, directives, pipes, and providers.
    imports: [], // List of components, directives, and pipes that belong to this module.
    providers: [], // List of modules to import into this module. Everything from the imported modules available to declarations of this module.
    declarations: [ArchitectureDemoScreen], // List of components, directives, and pipes visible to modules that import this module.
    exports: [], // List of dependency injection providers visible both to the contents of this module and to importers of this module.
    // bootstrap: [MyAppComponent] // List of components to bootstrap when this module is bootstrapped.
})
export default class ArchitectureDemoModule {
}