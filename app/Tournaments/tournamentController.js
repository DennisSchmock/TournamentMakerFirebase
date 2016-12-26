'use strict';


angular.module('myApp.tournamentView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tournaments', {
            templateUrl: 'templates/tournament/tournamentView.html',
            controller: 'TournamentCtrl',
            controllerAs: 'tourCtrl',
            resolve: {
                // controller will not be loaded until $waitForSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["Auth", function(Auth) {
                    // $waitForSignIn returns a promise so the resolve waits for it to complete
                    return Auth.$requireSignIn();
                }]
            }
        });
    }])

    .controller('TournamentCtrl', TournamentCtrl);

TournamentCtrl.$inject = ['$firebaseArray','authFactory'];

function TournamentCtrl($firebaseArray,authFactory) {
    var vm = this;
    vm.firebaserUser = authFactory.getFirebaseUser();

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