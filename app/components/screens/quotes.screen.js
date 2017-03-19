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
var quote_service_1 = require("../../service/finance/quote.service");
var quote_change_1 = require("../../pipe/quote.change");
var router_1 = require("@angular/router");
var QuotesScreen = (function () {
    function QuotesScreen(router, quoteService) {
        this.router = router;
        this.quoteService = quoteService;
        this.defaultSymbols = "INTC,WLL,FB,DAX,FIT";
        var that = this;
        this.symbols = this.defaultSymbols;
        this.loadQuotes();
        // WARNING scope does not work here in the TS !!!!
        this.interval = setInterval(function () {
            that.loadQuotes();
        }, 10000);
    }
    QuotesScreen.prototype.openDetails = function (symbol) {
        this.router.navigate(["/quotes/" + symbol]);
    };
    QuotesScreen.prototype.onKey = function (event) {
        if (event.which === 13) {
            this.loadQuotes();
        }
    };
    QuotesScreen.prototype.loadQuotes = function () {
        var _this = this;
        return this.quoteService.loadQuotes(this.symbols ? this.symbols : this.defaultSymbols).subscribe(function (quotes) {
            _this.quotes = quotes;
        }, function (error) { return console.error(error); });
    };
    QuotesScreen.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuotesScreen.prototype, "symbols", void 0);
    QuotesScreen = __decorate([
        core_1.Component({
            selector: "quotes",
            templateUrl: "app/components/screens/quotes.screen.html",
            styleUrls: ["app/components/screens/quotes.screen.css"],
            pipes: [
                quote_change_1.QuoteChangePipe
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, quote_service_1.QuoteService])
    ], QuotesScreen);
    return QuotesScreen;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuotesScreen;
//# sourceMappingURL=quotes.screen.js.map