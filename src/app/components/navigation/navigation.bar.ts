import {Component} from "@angular/core";
import {Routes} from "@angular/router";
import BootstrapScreen from "../screens/bootstrap.screen";
import SpeechScreen from "../screens/speech.screen";
import QuotesScreen from "../screens/quotes.screen";
import QuoteDetailsScreen from "../screens/quote.details.screen";
import AngularArchitectureDemoScreen from "../../module/angular.architecture.demo.screen";
import AngularDataBindingDemoScreen from "../../module/angular.data.binding.demo.screen";

export const navigationRoutes: Routes = [
    {path: 'angular-arch-demo', component: AngularArchitectureDemoScreen},
    {path: 'angular-data-binding-demo', component: AngularDataBindingDemoScreen},
    {path: 'bootstrap-screen', component: BootstrapScreen},
    {path: 'speech-screen', component: SpeechScreen},
    {path: 'quotes-screen', component: QuotesScreen},
    {path: 'quotes-screen/:symbol', component: QuoteDetailsScreen}
];

@Component({
    selector: 'navigation-bar',
    templateUrl: 'app/components/navigation/navigation.bar.html'
})
export default class NavigationBar {

}

