import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"; // NOT Twitter Bootstrap =)
import {DemoModule} from "./app/demo.module";
// import {enableProdMode} from "@angular/core"; // disable extra info :: ng.probe($0) in console

// enableProdMode();
platformBrowserDynamic()
.bootstrapModule(DemoModule, [])
.catch((err: any) => console.error(err));