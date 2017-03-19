import {Component, OnDestroy, Input} from "@angular/core";
import {QuoteService, Quote} from "../../service/finance/quote.service";
import {QuoteChangePipe} from "../../pipe/quote.change";
import {Router} from "@angular/router";

@Component({
    selector: "quotes",
    templateUrl: "app/components/screens/quotes.screen.html",
    styleUrls: ["app/components/screens/quotes.screen.css"],
    pipes: [
        QuoteChangePipe
    ]
})
export default class QuotesScreen implements OnDestroy {

    @Input() public symbols:string;
    public quotes:Quote[];

    private interval;
    private defaultSymbols:string = "INTC,WLL,FB,DAX,FIT";

    constructor(private router:Router,
                private quoteService:QuoteService) {

        var that = this;

        this.symbols = this.defaultSymbols;
        this.loadQuotes();

        // WARNING scope does not work here in the TS !!!!
        this.interval = setInterval(function () {
            that.loadQuotes();
        }, 10000);
    }

    openDetails(symbol:string) {
        this.router.navigate(["/quotes/" + symbol]);
    }

    onKey(event:any) {
        if (event.which === 13) {
            this.loadQuotes();
        }
    }

    private loadQuotes() {
        return this.quoteService.loadQuotes(this.symbols ? this.symbols : this.defaultSymbols).subscribe(
            quotes => {
                this.quotes = quotes;
            },
            error => console.error(error));
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}