/**
 * Created by dennisschmock on 25/12/2016.
 */
'use strict';


angular.module('myApp.mainView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'main/MainView.html',
            controller: 'MainController',
            controllerAs: 'mctrl'
        });
    }])

    .controller('MainController', MainController);

MainController.$inject = ['authFactory'];

function MainController(authFactory) {
    var vm = this;
    vm.af = authFactory;
    vm.auth = authFactory.auth;
    vm.firebaseUser = authFactory.auth.$getAuth();


}