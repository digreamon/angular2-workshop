import {Routes} from "@angular/router";
import {navigationRoutes} from "./components/navigation/navigation.bar";

export const APP_ROUTES: Routes = [
    ...navigationRoutes, // supply items of the array
    {
        path: '',
        redirectTo: '/welcome-screen',
        pathMatch: 'full'
    }
];