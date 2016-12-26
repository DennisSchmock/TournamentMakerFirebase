angular.module('myApp.auth')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: '',
            controller: 'LoginController',
            controllerAs: 'loginctrl'

        });
    }]);