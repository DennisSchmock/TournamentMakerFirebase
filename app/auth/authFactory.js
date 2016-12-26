/**
 * Created by Dennis on 24-12-2016.
 */
angular.module("myApp.auth")
.factory("authFactory",['$firebaseAuth',authFactory]);

function authFactory($firebaseAuth) {
    return $firebaseAuth();
};