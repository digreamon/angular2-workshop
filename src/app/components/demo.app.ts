import {Component} from "@angular/core";
import SpeechScreen from "./screens/speech.screen";
import QuotesScreen from "./screens/quotes.screen";
import BootstrapScreen from "./screens/bootstrap.screen";

@Component({
    selector: "demo-app",
    templateUrl: "app/components/demo.app.html",
    entryComponents: [ // precompile
        BootstrapScreen,
        SpeechScreen,
        QuotesScreen,
    ]
})
export class DemoApp {

}