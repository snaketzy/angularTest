/**
 * Created by Jerry on 2016-06-21.
 */
require.config({
    paths: {
        // angular
        "angular": "resources/js/angular",
        // angular-ui
        "angular-ui-router": "resources/js/angular-ui-router",
        // angularAMD
        "angularAMD": "resources/js/angularAMD",
        "ngload": "resources/js/ngload"
    },
    shim: {
        // angular
        "angular": { exports: "angular" },
        // angular-ui
        "angular-ui-router": ["angular"],
        // angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"]
    }
});

define(["angular", "angularAMD", "angular-ui-router"], function (angular, angularAMD) {
    var registerRoutes = function($stateProvider, $urlRouterProvider) {
        // default
        $urlRouterProvider.otherwise("/home");
        // route
        $stateProvider
            // home
            .state("/", angularAMD.route({
                url: "/",
                templateUrl: "views/main.html",
                controllerUrl: "controllers/main.js"
            }))
            .state('/pdt',angularAMD.route({
                url:'/pdt',
                templateUrl:'views/products.html',
                controllerUrl:'controllers/products.js'
            }))
    };
    var app = angular.module("route", ["ui.router"]);

// config
    app.config(["$stateProvider", "$urlRouterProvider", registerRoutes]);

// bootstrap
    return angularAMD.bootstrap(app);
});


