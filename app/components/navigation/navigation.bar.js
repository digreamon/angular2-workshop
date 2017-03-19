"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var welcome_screen_1 = require("../screens/welcome.screen");
var quotes_screen_1 = require("../screens/quotes.screen");
var quote_details_screen_1 = require("../screens/quote.details.screen");
exports.navigationRoutes = [
    { path: 'welcome', component: welcome_screen_1.default },
    { path: 'quotes', component: quotes_screen_1.default },
    { path: 'quotes/:symbol', component: quote_details_screen_1.default }
];
var NavigationBar = (function () {
    function NavigationBar() {
    }
    NavigationBar = __decorate([
        core_1.Component({
            selector: 'navigation-bar',
            templateUrl: 'app/components/navigation/navigation.bar.html',
            styleUrls: ["app/components/navigation/navigation.css"],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                welcome_screen_1.default,
                quotes_screen_1.default,
                quote_details_screen_1.default
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationBar);
    return NavigationBar;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavigationBar;
//# sourceMappingURL=navigation.bar.js.map