/*
 * ANGULAR1: <body ng-app="movieHunter">
 */

import {bootstrap} from "@angular/platform-browser-dynamic"; // not Twitter Bootstrap =)
import {DemoApp}     from "./components/demo.app";
import {appRouterProviders} from './routes';

// import {enableProdMode} from "@angular/core"; // disable extra info :: ng.probe($0) in console
// import {enableDebugTools} from "@angular/platform-browser"; // enable profiling utils

// enableProdMode();

// bootstrap(AppComponent, []).then(appRef => enableDebugTools(appRef));
bootstrap(DemoApp, [
	appRouterProviders
]).catch(err => console.error(err));