"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var welcome_screen_1 = require("./screens/welcome.screen");
var quotes_screen_1 = require("./screens/quotes.screen");
var quote_details_screen_1 = require("./screens/quote.details.screen");
var DemoApp = (function () {
    function DemoApp() {
    }
    return DemoApp;
}());
DemoApp = __decorate([
    core_1.Component({
        selector: "demo-app",
        templateUrl: "app/components/demo.app.html",
        entryComponents: [
            welcome_screen_1.default,
            quotes_screen_1.default,
            quote_details_screen_1.default
        ]
    })
], DemoApp);
exports.DemoApp = DemoApp;
//# sourceMappingURL=demo.app.js.map