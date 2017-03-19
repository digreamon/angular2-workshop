"use strict";
var router_1 = require('@angular/router');
var navigation_bar_1 = require("./components/navigation/navigation.bar");
exports.routes = navigation_bar_1.navigationRoutes.concat([
    // application of items of the array
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }
]);
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.js.map