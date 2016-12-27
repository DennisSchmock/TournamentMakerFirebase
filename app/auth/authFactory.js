/**
 * Created by dennisschmock on 24/12/2016.
 */
angular.module('myApp.auth')
    .factory('authFactory',authFactory);
authFactory.$inject = ['$firebaseAuth'];

function authFactory($firebaseAuth) {
    var authFactory = {};
    authFactory.firebaseUser = null;

    authFactory.getFirebaseUser = getFirebaseUser;
    authFactory.setFirebaseUser = setFirebaseUser;
    authFactory.auth = $firebaseAuth();

    function getFirebaseUser() {
        return authFactory.firebaseUser;
    }

    function setFirebaseUser(firebaseUser){
        authFactory.firebaseUser = firebaseUser;
    }

    return authFactory;
}