/**
 * Created by Dennis on 23-12-2016.
 */
angular.module("myApp.auth", ['firebase'])
    .controller('AuthController', AuthController);

AuthController.$inject = ['authFactory'];
function AuthController(authFactory) {
    var vm = this;

    vm.signIn = signIn;
    vm.createUser = createUser;

    function signIn() {
        vm.firebaseUser = null;
        vm.error = null;
        authFactory.$signInWithEmailAndPassword(vm.email, vm.password)
            .then(function (firebaseUser) {
                vm.firebaseUser = firebaseUser;
            })
            .catch(function (error) {
                vm.error = error;
            });
    };

    function createUser() {
        vm.message = null;
        vm.error = null;
        authFactory.$createUserWithEmailAndPassword(vm.email, vm.password)
            .then(function (firebaseUser) {
                vm.message = "User created with uid: " + firebaseUser.uid;
            })
            .catch(function (error) {
                $scope.error = error;

            })
    }
}