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
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var quote_service_1 = require("../../service/finance/quote.service");
var QuoteDetailsScreen = (function () {
    function QuoteDetailsScreen(route, quoteService) {
        this.route = route;
        this.quoteService = quoteService;
        this.quote = new quote_service_1.Quote("", "", 0, 0);
    }
    QuoteDetailsScreen.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var symbol = params['symbol'];
            _this.quoteService.loadQuotes(symbol).subscribe(function (quote) {
                _this.quote = quote;
            }, function (error) { return console.error(error); });
        });
    };
    return QuoteDetailsScreen;
}());
QuoteDetailsScreen = __decorate([
    core_1.Component({
        selector: "quote-details",
        template: "\n\t\t<h3>{{quote.name}}&nbsp;&nbsp;({{quote.symbol}})</h3>\n\t\t<hr>\n\t\t<h5><em>Open:</em>{{quote.open}}&nbsp;&nbsp;&nbsp;<em>Last:</em>{{quote.last}}</h5>\n\t\t<div [class.trend-up]=\"quote.getChange()>0\" [class.trend-down]=\"quote.getChange()<0\">\n\t\t\t{{quote | quoteChange}}\n\t\t</div>\n    ",
        styleUrls: ["app/components/screens/quotes.screen.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        quote_service_1.QuoteService])
], QuoteDetailsScreen);
exports.default = QuoteDetailsScreen;
//# sourceMappingURL=quote.details.screen.js.map