import {Component} from "@angular/core";
import {Routes} from "@angular/router";
import WelcomeScreen from "../screens/welcome.screen";
import QuotesScreen from "../screens/quotes.screen";
import QuoteDetailsScreen from "../screens/quote.details.screen";

export const navigationRoutes: Routes = [
    {path: 'welcome', component: WelcomeScreen},
    {path: 'quotes', component: QuotesScreen},
    {path: 'quotes/:symbol', component: QuoteDetailsScreen}
];

@Component({
    selector: 'navigation-bar',
    templateUrl: 'app/components/navigation/navigation.bar.html',
    styleUrls: ["app/components/navigation/navigation.css"]
})
export default class NavigationBar {

}

