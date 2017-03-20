import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {QuoteService, Quote} from "../../service/finance/quote.service";
import any = jasmine.any;

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
    styleUrls: ["app/components/screens/quotes.screen.css"]
})
export default class QuoteDetailsScreen implements OnInit {

    private sub: any;
    private quote: Quote = new Quote("", "", 0, 0);

    constructor(private route: ActivatedRoute,
                private quoteService: QuoteService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let symbol = params['symbol'];
            this.quoteService.loadQuotes(symbol).subscribe(
                (quote: any) => {
                    this.quote = quote;
                },
                (error: any) => console.error(error));
        });
    }

}