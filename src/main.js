"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // not Twitter Bootstrap =)
var demo_module_1 = require("./app/demo.module");
// import {enableProdMode} from "@angular/core"; // disable extra info :: ng.probe($0) in console
// import {enableDebugTools} from "@angular/platform-browser"; // enable profiling utils
// enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(demo_module_1.DemoModule)
    .catch(function (err) { return console.error(err); });
// .then(appRef => enableDebugTools(appRef)); 
//# sourceMappingURL=main.js.map