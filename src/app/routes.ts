import {Routes} from "@angular/router";
import {navigationRoutes} from "./components/navigation/navigation.bar";

export const APP_ROUTES: Routes = [
    ...navigationRoutes, // application of items of the array
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }
];