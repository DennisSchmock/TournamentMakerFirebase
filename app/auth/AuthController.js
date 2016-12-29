/**
 * Created by Dennis on 23-12-2016.
 */
angular.module("myApp.auth", ['firebase'])
    .controller('AuthController', AuthController);

AuthController.$inject = ['authFactory', 'spinnerService'];
function AuthController(authFactory, spinnerService) {
    var vm = this;

    vm.signIn = signIn;

    spinnerService.show('loginspinner');

    function signIn() {
        vm.firebaseUser = null;
        vm.error = null;
        spinnerService.show('loginspinner');

        authFactory.$signInWithEmailAndPassword(vm.email, vm.password)
            .then(function (firebaseUser) {
                vm.firebaseUser = firebaseUser;

            })
            .catch(function (error) {
                vm.error = error;

            }).finally(function () {

            spinnerService.hide('loginspinner');

        });
    };


}