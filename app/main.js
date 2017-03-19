/*
 * ANGULAR1: <body ng-app="movieHunter">
 */
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // not Twitter Bootstrap =)
var demo_app_1 = require("./components/demo.app");
var routes_1 = require('./routes');
// import {enableProdMode} from "@angular/core"; // disable extra info :: ng.probe($0) in console
// import {enableDebugTools} from "@angular/platform-browser"; // enable profiling utils
// enableProdMode();
// bootstrap(AppComponent, []).then(appRef => enableDebugTools(appRef));
platform_browser_dynamic_1.bootstrap(demo_app_1.DemoApp, [
    routes_1.appRouterProviders
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map