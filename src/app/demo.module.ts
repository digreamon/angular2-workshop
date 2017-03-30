import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {DemoApp} from "./components/demo.app";
import {HeaderComponent} from "./components/navigation/header";
import {FooterComponent} from "./components/navigation/footer";
import NavigationBar from "./components/navigation/navigation.bar";
import SpeechScreen from "./components/screens/speech.screen";
import QuotesScreen from "./components/screens/quotes.screen";
import QuoteDetailsScreen from "./components/screens/quote.details.screen";
import {QuoteChangePipe} from "./pipe/quote.change";
import {HiGreeter} from "./components/greet/hi.greeter";
import {SqGreeter} from "./components/greet/sq.greeter";
import {SpeechService} from "./service/speech/speech.service";
import {QuoteService, QuoteServiceImpl} from "./service/finance/quote.service";
import {LogDirective} from "./directive/log.directive";
import {APP_ROUTES} from "./routes";
import {AlertModule, CarouselModule} from "ng2-bootstrap";
import WelcomeScreen from "./components/screens/welcome.screen";
import BootstrapScreen from "./components/screens/bootstrap.screen";
import AngularArchitectureDemoModule from "./module/angular.architecture.demo.module";
import AngularDataBindingModule from "./module/angular.data.binding.demo.module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(APP_ROUTES),

        // bootstrap
        AlertModule.forRoot(),
        CarouselModule.forRoot(),

        // custom modules
        AngularArchitectureDemoModule,
        AngularDataBindingModule
    ],
    declarations: [
        DemoApp,

        LogDirective,

        QuoteChangePipe,

        NavigationBar,
        HeaderComponent,
        FooterComponent,
        HiGreeter, SqGreeter,

        WelcomeScreen,
        BootstrapScreen,
        SpeechScreen,
        QuotesScreen,
        QuoteDetailsScreen
    ],
    bootstrap: [DemoApp], // Only the root module should set this bootstrap property.
    providers: [ // Dependency Injection
        SpeechService,
        // Can't use interface as provider token
        // It's not Angular's fault. An interface is a TypeScript design-time artifact. JavaScript doesn't have interfaces.
        // The TypeScript interface disappears from the generated JavaScript.
        // There is no interface type information left for Angular to find at runtime.
        {provide: QuoteService, useClass: QuoteServiceImpl}
    ]
})
export class DemoModule {

}