import {Routes} from "@angular/router";
import {navigationRoutes} from "./components/navigation/navigation.bar";
import WelcomeScreen from "./components/screens/welcome.screen";

export const APP_ROUTES: Routes = [
    ...navigationRoutes, // supply items of the array
    {path: 'welcome-screen', component: WelcomeScreen},
    {
        path: '',
        redirectTo: '/welcome-screen',
        pathMatch: 'full'
    }
];