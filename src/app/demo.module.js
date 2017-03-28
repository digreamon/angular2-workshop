"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var demo_app_1 = require("./components/demo.app");
var header_1 = require("./components/navigation/header");
var footer_1 = require("./components/navigation/footer");
var navigation_bar_1 = require("./components/navigation/navigation.bar");
var welcome_screen_1 = require("./components/screens/welcome.screen");
var quotes_screen_1 = require("./components/screens/quotes.screen");
var quote_details_screen_1 = require("./components/screens/quote.details.screen");
var quote_change_1 = require("./pipe/quote.change");
var hi_greeter_1 = require("./components/greet/hi.greeter");
var sq_greeter_1 = require("./components/greet/sq.greeter");
var speech_service_1 = require("./service/speech/speech.service");
var quote_service_1 = require("./service/finance/quote.service");
var log_directive_1 = require("./directive/log.directive");
var routes_1 = require("./routes");
var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes_1.APP_ROUTES)
        ],
        declarations: [
            demo_app_1.DemoApp,
            log_directive_1.LogDirective,
            quote_change_1.QuoteChangePipe,
            header_1.HeaderComponent,
            footer_1.FooterComponent,
            navigation_bar_1.default,
            welcome_screen_1.default,
            quotes_screen_1.default,
            quote_details_screen_1.default,
            hi_greeter_1.HiGreeter, sq_greeter_1.SqGreeter
        ],
        bootstrap: [demo_app_1.DemoApp],
        providers: [
            speech_service_1.SpeechService,
            // Can't use interface as provider token
            // It's not Angular's fault. An interface is a TypeScript design-time artifact. JavaScript doesn't have interfaces.
            // The TypeScript interface disappears from the generated JavaScript.
            // There is no interface type information left for Angular to find at runtime.
            { provide: quote_service_1.QuoteService, useClass: quote_service_1.QuoteServiceImpl }
        ]
    })
], DemoModule);
exports.DemoModule = DemoModule;

//# sourceMappingURL=demo.module.js.map
