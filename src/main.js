"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // NOT Twitter Bootstrap =)
var demo_module_1 = require("./app/demo.module");
// import {enableProdMode} from "@angular/core"; // disable extra info :: ng.probe($0) in console
// enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(demo_module_1.DemoModule, [])
    .catch(function (err) { return console.error(err); });

//# sourceMappingURL=main.js.map
