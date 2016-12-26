'use strict';

angular.module('myApp.players', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/players', {
            templateUrl: 'templates/players/playerview.html',
            controller: 'PlayerCtrl',
            controllerAs: 'pCtrl',
            resolve: {
                // controller will not be loaded until $waitForSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["Auth", function(Auth) {
                    // $waitForSignIn returns a promise so the resolve waits for it to complete
                    return Auth.$waitForSignIn();
                }]
            }
        });
    }])

    .controller('PlayerCtrl', [function () {

        var vm = this;

        //**Var declarations**//
        vm.playerlist = [];


    }]);