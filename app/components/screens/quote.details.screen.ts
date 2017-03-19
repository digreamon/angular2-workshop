import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {QuoteService, Quote} from "../../service/finance/quote.service";
import {QuoteChangePipe} from "../../pipe/quote.change";

@Component({
    selector: "quote-details",
    template: `
        <h3>{{quote.name}}&nbsp;&nbsp;({{quote.symbol}})</h3>
        <hr>
        <h5><em>Open:</em>{{quote.open}}&nbsp;&nbsp;&nbsp;<em>Last:</em>{{quote.last}}</h5>
        <div [class.trend-up]="quote.getChange()>0" [class.trend-down]="quote.getChange()<0">
            {{quote | quoteChange}}
        </div>
    `,
    styleUrls: ["app/components/screens/quotes.screen.css"],
    pipes: [
        QuoteChangePipe
    ]
})
export default class QuoteDetailsScreen implements OnInit {

    private sub:any;
    private quote:Quote = new Quote("", "", 0, 0);

    constructor(private route:ActivatedRoute,
                private quoteService:QuoteService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let symbol = params['symbol'];
            this.quoteService.loadQuotes(symbol).subscribe(
                quote => {
                    this.quote = quote;
                },
                error => console.error(error));
        });
    }

}