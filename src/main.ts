import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"; // not Twitter Bootstrap =)
import {DemoModule} from "./app/demo.module";

// import {enableProdMode} from "@angular/core"; // disable extra info :: ng.probe($0) in console
// import {enableDebugTools} from "@angular/platform-browser"; // enable profiling utils

// enableProdMode();

platformBrowserDynamic()
.bootstrapModule(DemoModule)
.catch((err: any) => console.error(err));
// .then(appRef => enableDebugTools(appRef));