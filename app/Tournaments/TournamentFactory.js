/**
 * Created by Dennis on 12-12-2016.
 */
'use strict';

angular.module('myApp.tournamentView')
    .factory('tournamentFactory', [function () {
        //**VAR declarations**//
        var players = [];
        var player = {};
        var tournaments = [];
        var tournament = {};
        var team = {};
        var teams =[];
        tournament.disciplines = [];

        var service = {
            createTournament: createTournament,
            addPlayer: addPlayer,
            players: players,
            tournaments: tournaments,
            tournament: tournament,
            team: team,
            teams: teams,
            getTournament: getTournament,
            getPlayers: getPlayers,
            addDiscipline: addDiscipline,
            getPlayer: getPlayer,
            savePlayerList: savePlayerList,
            getTeam: getTeam,
            getTeams: getTeams,
            addTeam: addTeam

        }
        return service;



        //**functions**//
        function createTournament(tournament) {
        //Todo, do something with tournament
        }

        function addTeam(team){
            teams.push(team);
            console.log(team);
        }



        function addDiscipline(discipline){
            var disc = {};
            disc.name = discipline;
            disc.id = tournament.disciplines.length;

            tournament.disciplines.push(disc);
        }


        //Getters
        function addPlayer(player) {
            players.push(player);
        }

        function savePlayerList(){
            //todo post to api
        }
        function getTeam(){
            return team;
        }
        function getTeams(){
            return teams;
        }

        function getPlayer(){
            return player;
        }

        function getTournament(){
            return tournament;
        }

        function getPlayers(){
            return players;
        }

    }]);