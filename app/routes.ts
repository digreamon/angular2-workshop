import { provideRouter, RouterConfig }  from '@angular/router';
import {navigationRoutes} from "./components/navigation/navigation.bar";

export const routes: RouterConfig = [
	...navigationRoutes, // application of items of the array
	{
		path: '',
		redirectTo: '/welcome',
		pathMatch: 'full'
	}
];

export const appRouterProviders = [
	provideRouter(routes)
];