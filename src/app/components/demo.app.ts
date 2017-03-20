import {Component} from "@angular/core";
import WelcomeScreen from "./screens/welcome.screen";
import QuotesScreen from "./screens/quotes.screen";
import QuoteDetailsScreen from "./screens/quote.details.screen";

@Component({
    selector: "demo-app",
    templateUrl: "app/components/demo.app.html",
    entryComponents: [ // precompile
        WelcomeScreen,
        QuotesScreen,
        QuoteDetailsScreen
    ]
})
export class DemoApp {

}