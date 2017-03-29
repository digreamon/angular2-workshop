import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from '@angular/http';
import {DemoApp} from "./components/demo.app";
import {HeaderComponent} from "./components/navigation/header";
import {FooterComponent} from "./components/navigation/footer";
import NavigationBar from "./components/navigation/navigation.bar";
import WelcomeScreen from "./components/screens/welcome.screen";
import QuotesScreen from "./components/screens/quotes.screen";
import QuoteDetailsScreen from "./components/screens/quote.details.screen";
import {QuoteChangePipe} from "./pipe/quote.change";
import {HiGreeter} from "./components/greet/hi.greeter";
import {SqGreeter} from "./components/greet/sq.greeter";
import {SpeechService} from "./service/speech/speech.service";
import {QuoteService, QuoteServiceImpl, QuoteServiceImplMock} from "./service/finance/quote.service";
import {LogDirective} from "./directive/log.directive";
import {APP_ROUTES} from "./routes";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [
        DemoApp,
        LogDirective,
        QuoteChangePipe,
        HeaderComponent,
        FooterComponent,
        NavigationBar,
        WelcomeScreen,
        QuotesScreen,
        QuoteDetailsScreen,
        HiGreeter, SqGreeter
    ],
    bootstrap: [DemoApp],
    providers: [
        SpeechService,
        // Can't use interface as provider token
        // It's not Angular's fault. An interface is a TypeScript design-time artifact. JavaScript doesn't have interfaces.
        // The TypeScript interface disappears from the generated JavaScript.
        // There is no interface type information left for Angular to find at runtime.
        {provide: QuoteService, useClass: QuoteServiceImplMock}
    ]
})
export class DemoModule {

}