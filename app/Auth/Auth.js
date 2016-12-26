/**
 * Created by dennisschmock on 24/12/2016.
 */
angular.module('myApp.auth', ['firebase'])
    .controller('AuthController', AuthController);

AuthController.$inject = ['authFactory'];

function AuthController(authFactory) {
    var vm = this;

    vm.signIn = signIn;
    vm.createUser = createUser;
    vm.signOut = signOut;
    vm.firebaseUser = authFactory.getFirebaseUser();
    vm.authFactory = authFactory;
    vm.auth = authFactory.auth;





    //**Function implementations**//

    function signOut() {
        authFactory.firebaseUser = null;
        vm.firebaseUser = null;


    }

    function signIn() {
        vm.error = null;
        vm.message = null;

        authFactory.auth.$signInWithEmailAndPassword(vm.email, vm.password)
            .then(function (firebaseUser) {
                authFactory.firebaseUser = firebaseUser;
                vm.message = 'User logged in';
                console.log(authFactory.firebaseUser);
                vm.firebaseUser = authFactory.firebaseUser;
            })
            .catch(function (error) {
                vm.error = error;
                console.log(firebaseUser);

            });
    };

    function createUser() {
        vm.message = null;
        vm.error = null;

        authFactory.auth.$createUserWithEmailAndPassword(vm.email, vm.password)
            .then(function (firebaseUser) {
                vm.message = "User created with uid: " + firebaseUser.uid;
            })
            .catch(function (error) {
                vm.error = error;
            });
    }

    function updateUser(){

    }


}