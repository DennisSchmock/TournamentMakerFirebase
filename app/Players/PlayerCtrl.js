'use strict';

angular.module('myApp.players', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/players', {
            templateUrl: 'templates/players/playerview.html',
            controller: 'PlayerCtrl',
            controllerAs: 'pCtrl'
        });
    }])

    .controller('PlayerCtrl', [function () {

        var vm = this;

        //**Var declarations**//
        vm.playerlist = [];


    }]);