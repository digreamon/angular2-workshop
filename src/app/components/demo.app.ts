import {Component} from "@angular/core";
import SpeechScreen from "./screens/speech.screen";
import QuotesScreen from "./screens/quotes.screen";
import QuoteDetailsScreen from "./screens/quote.details.screen";

@Component({
    selector: "demo-app",
    templateUrl: "app/components/demo.app.html",
    entryComponents: [ // precompile
        SpeechScreen,
        QuotesScreen,
        QuoteDetailsScreen
    ]
})
export class DemoApp {

}