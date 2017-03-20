"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_bar_1 = require("./components/navigation/navigation.bar");
exports.APP_ROUTES = navigation_bar_1.navigationRoutes.concat([
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }
]);
//# sourceMappingURL=routes.js.map