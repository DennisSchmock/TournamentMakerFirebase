'use strict';

angular.module('myApp.tournamentView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tournaments', {
            templateUrl: 'templates/tournament/tournamentview.html',
            controller: 'TournamentCtrl',
            controllerAs: 'tCtrl'
        });
    }])

    .controller('TournamentCtrl', TournamentCtrl);

TournamentCtrl.$inject = ['tournamentFactory'];

function TournamentCtrl(tournamentFactory) {
    var vm = this;

    //**Var declarations**//
    var tournamentList = [];
    var tournament = {};


    //**Function declarations**//
    var createTournament = createTournament;

    //**Functions**//
    function createTournament() {

    }


};