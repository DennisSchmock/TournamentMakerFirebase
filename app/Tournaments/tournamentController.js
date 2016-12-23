'use strict';


angular.module('myApp.tournamentView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tournaments', {
            templateUrl: 'templates/tournament/tournamentView.html',
            controller: 'TournamentCtrl',
            controllerAs: 'tourCtrl'
        });
    }])

    .controller('TournamentCtrl', TournamentCtrl);

TournamentCtrl.$inject = ['$firebaseArray'];

function TournamentCtrl($firebaseArray) {
    var vm = this;

    var ref = firebase.database().ref().child("messages");
    // download the data into a local object
    vm.messages = $firebaseArray(ref);
    vm.addMessage = function () {
        vm.messages.$add({
            text:vm.newMessageText
        });
        vm.newMessageText = "";

    };


    //**Var declarations**//
    var tournamentList = [];
    var tournament = {};


};