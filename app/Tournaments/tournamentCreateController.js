'use strict';

angular.module('myApp.tournamentView')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/createtournament', {
            templateUrl: 'templates/tournament/createTournament.html',
            controller: 'TournamentCreateCtrl',
            controllerAs: 'tCtrl'
        });
    }])

    .controller('TournamentCreateCtrl', TournamentCreateCtrl);

TournamentCtrl.$inject = ['tournamentFactory'];

function TournamentCreateCtrl(tournamentFactory) {
    var vm = this;

    //**Var declarations**//

    vm.tournament = {};
    vm.tournament.name = '';
    vm.player = {};
    vm.players = tournamentFactory.getPlayers();




    //**Function declarations**//
    vm.createTournament = createTournament;
    vm.addPlayer = addPlayer;

    //**Functions**//
    function createTournament() {

    }

    function addPlayer(player){
        tournamentFactory.addPlayer(player);

        vm.player = {};
    }




};