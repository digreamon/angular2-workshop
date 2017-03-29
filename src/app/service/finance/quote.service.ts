import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import "rxjs/add/operator/map";

export class Quote {
    constructor(public symbol: string,
                public name: string,
                public open: number,
                public last: number) {

    }

    public getChange(): number {
        return this.last - this.open;
    }
}

// Can't use interface as provider token
// It's not Angular's fault. An interface is a TypeScript design-time artifact. JavaScript doesn't have interfaces.
// The TypeScript interface disappears from the generated JavaScript.
// There is no interface type information left for Angular to find at runtime.
// export interface QuoteService {
export abstract class QuoteService {
    abstract loadQuotes(quotes: string): Observable<Quote>;
}

@Injectable()
export class QuoteServiceImpl extends QuoteService {

    constructor(private http: Http) {
        super();
    }

    loadQuotes(quotes: string): Observable<Quote> {
        return this.http.get(this.getUrl(quotes))
        .map(response => {
            return response.json().query.results.quote;
        })
        .map(quotes => {
            if (quotes.map) {
                return quotes.map(
                    (quote: any) => new Quote(quote.Symbol, quote.Name, quote.Open, quote.LastTradePriceOnly));
            } else {
                return Observable.of(new Quote(quotes.Symbol, quotes.Name, quotes.Open, quotes.LastTradePriceOnly));
            }
        });
    }

    private getUrl(quotes: string) {
        return "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" +
            quotes +
            "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
    }
}

@Injectable()
export class QuoteServiceImplMock implements QuoteService {

    loadQuotes(quotes: string): Observable<Quote> {
        return Observable.from(this.quotes).map(quote => new Quote(quote.symbol, quote.name, quote.open, quote.last));
    }

    private quotes = [
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