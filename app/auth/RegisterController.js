/**
 * Created by Dennis on 27-12-2016.
 */
angular.module('myApp.auth')
.component('registerUser',{
    templateUrl: 'auth/Register.html',
    controller: 'RegisterController'
})

.controller('RegisterController', RegisterController);

RegisterController.$inject = ['Auth','$firebaseArray'];

function RegisterController(Auth) {
    var vm = this;
    vm.user = {};
    vm.registerUser = registerUser;


    function registerUser(user) {
        vm.message = null;
        vm.error = null;
        vm.interacted = function(field) {
            return $scope.submitted || field.$dirty;
        };



        Auth.$createUserWithEmailAndPassword(user.email, user.password)
            .then(function (firebaseUser) {
                var ref = firebase.database().ref('users/' + firebaseUser.uid )
                    .set({
                        email: vm.user.email,
                        firstName: vm.user.firstName,
                        lastName: vm.user.lastName
                    });
                vm.message = "User created with uid: " + firebaseUser.uid;

            })
            .catch(function (error) {
                $scope.error = error;

            })
    }
}

