'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'firebase',
    'myApp.tournamentView',
    'myApp.tournamentCreateView',
    'myApp.players',
    'myApp.version',
    'myApp.auth',
    'ui.bootstrap'

]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);
