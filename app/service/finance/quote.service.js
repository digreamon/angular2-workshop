"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Quote = (function () {
    function Quote(symbol, name, open, last) {
        this.symbol = symbol;
        this.name = name;
        this.open = open;
        this.last = last;
    }
    Quote.prototype.getChange = function () {
        return this.last - this.open;
    };
    return Quote;
}());
exports.Quote = Quote;
// Can't use interface as provider token
// It's not Angular's fault. An interface is a TypeScript design-time artifact. JavaScript doesn't have interfaces.
// The TypeScript interface disappears from the generated JavaScript.
// There is no interface type information left for Angular to find at runtime.
// export interface QuoteService {
var QuoteService = (function () {
    function QuoteService() {
    }
    return QuoteService;
}());
exports.QuoteService = QuoteService;
var QuoteServiceImpl = (function (_super) {
    __extends(QuoteServiceImpl, _super);
    function QuoteServiceImpl(http) {
        _super.call(this);
        this.http = http;
    }
    QuoteServiceImpl.prototype.loadQuotes = function (quotes) {
        return this.http.get(this.getUrl(quotes))
            .map(function (response) { return response.json().query.results.quote; })
            .map(function (quotes) {
            if (quotes.map) {
                return quotes.map(function (quote) { return new Quote(quote.Symbol, quote.Name, quote.Open, quote.LastTradePriceOnly); });
            }
            else {
                return new Quote(quotes.Symbol, quotes.Name, quotes.Open, quotes.LastTradePriceOnly);
            }
        });
    };
    QuoteServiceImpl.prototype.getUrl = function (quotes) {
        return "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" +
            quotes +
            "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
    };
    QuoteServiceImpl = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuoteServiceImpl);
    return QuoteServiceImpl;
}(QuoteService));
exports.QuoteServiceImpl = QuoteServiceImpl;
var QuoteServiceImplMock = (function (_super) {
    __extends(QuoteServiceImplMock, _super);
    function QuoteServiceImplMock() {
        _super.apply(this, arguments);
        this.quotes = [
            {
                symbol: "EURO",
                name: "EUR/CHF",
                open: 1.0824,
                last: 1.0812
            },
            {
                symbol: "DAX",
                name: " DAX (PERFORMANCE INDEX) (DAX)",
                open: 10144.34,
                last: 10328.87
            }
        ];
    }
    QuoteServiceImplMock.prototype.loadQuotes = function (quotes) {
        return this.quotes.map(function (i) { return new Quote(i.symbol, i.name, i.open, i.last); });
    };
    QuoteServiceImplMock = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuoteServiceImplMock);
    return QuoteServiceImplMock;
}(QuoteService));
exports.QuoteServiceImplMock = QuoteServiceImplMock;
//# sourceMappingURL=quote.service.js.map