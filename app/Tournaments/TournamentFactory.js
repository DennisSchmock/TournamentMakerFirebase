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

        var service = {
            createTournament: createTournament,
            addPlayer: addPlayer,
            players: players,
            tournaments: tournaments,
            tournament: tournament,
            getTournament: getTournament,
            getPlayers: getPlayers
        }
        return service;



        //**functions**//
        function createTournament() {

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