/// <reference path="includes/ts/angular.d.ts"/>

var app = angular.module("myApp", []);

//Set up our site routes
app.config(($routeProvider) => {
    $routeProvider
        .when('/page1',  <ng.Route>{ templateUrl: 'pages/page1.html' })
        .when('/page2', <ng.Route>{ templateUrl: 'pages/page2.html' })
        .when('/404',  <ng.Route>{ templateUrl: 'pages/404.html' })
        .otherwise( <ng.Route>{ redirectTo: '/404' });
})