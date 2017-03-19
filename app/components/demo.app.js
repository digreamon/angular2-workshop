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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var quote_service_1 = require("../service/finance/quote.service");
var speech_service_1 = require("../service/speech/speech.service");
var navigation_bar_1 = require("./navigation/navigation.bar");
var welcome_screen_1 = require("./screens/welcome.screen");
var quotes_screen_1 = require("./screens/quotes.screen");
var header_1 = require("./navigation/header");
var footer_1 = require("./navigation/footer");
var quote_details_screen_1 = require("./screens/quote.details.screen");
var DemoApp = (function () {
    function DemoApp() {
    }
    DemoApp = __decorate([
        core_1.Component({
            selector: "demo-app",
            templateUrl: "app/components/demo.app.html",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                header_1.HeaderComponent,
                footer_1.FooterComponent,
                navigation_bar_1.default
            ],
            precompile: [
                welcome_screen_1.default,
                quotes_screen_1.default,
                quote_details_screen_1.default
            ],
            providers: [
                http_1.HTTP_PROVIDERS,
                speech_service_1.SpeechService,
                // Can't use interface as provider token
                // It's not Angular's fault. An interface is a TypeScript design-time artifact. JavaScript doesn't have interfaces.
                // The TypeScript interface disappears from the generated JavaScript.
                // There is no interface type information left for Angular to find at runtime.
                { provide: quote_service_1.QuoteService, useClass: quote_service_1.QuoteServiceImpl }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoApp);
    return DemoApp;
}());
exports.DemoApp = DemoApp;
//# sourceMappingURL=demo.app.js.map