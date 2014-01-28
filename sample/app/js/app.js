'use strict';
// Declare app level module which depends on filters, and services
angular.module('OnlyMobile', [
        'OnlyMobile.controllers',
        'OnlyMobile.services',
        'OnlyMobile.filters',
        'OnlyMobile.directives',
        'ngRoute'                           // Angular Routes
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'MainCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

// Declaramos los modulos
angular.module('OnlyMobile.services', []);