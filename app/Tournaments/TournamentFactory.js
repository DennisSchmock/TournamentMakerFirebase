/**
 * Created by Dennis on 12-12-2016.
 */
'use strict';

angular.module('myApp.tournamentView')
    .factory('tournamentFactory', [function () {
        var tournamentFactory = [];

        //**VAR declarations**//
        tournamentFactory.tournaments = [];



        //**function declarations**//
        tournamentFactory.createTournament = createTournament;
        tournamentFactory.addPlayer = addPlayer;



        //**functions**//
        function createTournament(){

        }

        function addPlayer() {

        }

        return tournamentFactory;


    }]);