/**
 * Created by Dennis on 12-12-2016.
 */
'use strict';

angular.module('myApp.tournamentView')
    .factory('tournamentFactory', [function () {
        //**VAR declarations**//
        var players = [];
        var tournaments = [];
        var tournament = {};
        tournament.disciplines = [];

        var service = {
            createTournament: createTournament,
            addPlayer: addPlayer,
            players: players,
            tournaments: tournaments,
            tournament: tournament,
            getTournament: getTournament,
            getPlayers: getPlayers,
            addDiscipline: addDiscipline
        }
        return service;



        //**functions**//
        function createTournament() {
            //Add api-call here
        }

        function addDiscipline(discipline){
            var disc = {};
            disc.name = discipline;
            disc.id = tournament.disciplines.length;

            tournament.disciplines.push(disc);
        }
        function getTournament(){
            return tournament;
        }

        function getPlayers(){
            return players;
        }


        function addPlayer(player) {
            players.push(player);
        }



    }]);