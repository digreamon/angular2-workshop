import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES}  from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {QuoteService, QuoteServiceImplMock, QuoteServiceImpl} from "../service/finance/quote.service";
import {SpeechService} from "../service/speech/speech.service";
import NavigationBar from "./navigation/navigation.bar";
import WelcomeScreen from "./screens/welcome.screen";
import QuotesScreen from "./screens/quotes.screen";
import {HeaderComponent} from "./navigation/header";
import {FooterComponent} from "./navigation/footer";
import QuoteDetailsScreen from "./screens/quote.details.screen";

@Component({
    selector: "demo-app",
    templateUrl: "app/components/demo.app.html",
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent,
        FooterComponent,
        NavigationBar
    ],
    precompile: [
        WelcomeScreen,
        QuotesScreen,
        QuoteDetailsScreen
    ],
    providers: [
        HTTP_PROVIDERS,
        SpeechService,
        // Can't use interface as provider token
        // It's not Angular's fault. An interface is a TypeScript design-time artifact. JavaScript doesn't have interfaces.
        // The TypeScript interface disappears from the generated JavaScript.
        // There is no interface type information left for Angular to find at runtime.
        {provide: QuoteService, useClass: QuoteServiceImpl}
    ]
})
export class DemoApp {

}