import {Component} from "@angular/core";
import {Routes} from "@angular/router";
import BootstrapScreen from "../screens/bootstrap.screen";
import SpeechScreen from "../screens/speech.screen";
import QuotesScreen from "../screens/quotes.screen";
import QuoteDetailsScreen from "../screens/quote.details.screen";
import ArchitectureDemoScreen from "../../module/architecture.demo.screen";
import DataBindingDemoScreen from "../../module/data.binding.demo.screen";
import DependencyInjectionDemoScreen from "../../module/dependency.injection.demo.screen";

export const navigationRoutes: Routes = [
    {path: 'architecture-demo', component: ArchitectureDemoScreen},
    {path: 'data-binding-demo', component: DataBindingDemoScreen},
    {path: 'dependency-injection-demo', component: DependencyInjectionDemoScreen},
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

