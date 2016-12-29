/**
 * Created by Dennis on 27-12-2016.
 */
angular.module('myApp.auth')
    .component('registerUser', {
        templateUrl: 'auth/Register.html',
        controller: 'RegisterController'
    })

    .controller('RegisterController', RegisterController);

RegisterController.$inject = ['Auth', '$firebaseArray','spinnerService'];

function RegisterController(Auth,$firebaseArray,spinnerService) {
    var vm = this;
    vm.user = {};
    vm.registerUser = registerUser;
    vm.interacted = interacted;
    vm.interactedAndBlurred = interactedAndBlurred;

    vm.submitted = false;
    vm.submit = function() {
        vm.submitted = true;
    };

    function interacted(field) {
        return vm.submitted || field.$dirty;

    }

    function interactedAndBlurred(field) {
        return vm.submitted || field.$dirty && field.$touched;

    }



    function registerUser(user) {
        vm.message = null;
        vm.error = null;
        spinnerService.show('booksSpinner');



        Auth.$createUserWithEmailAndPassword(user.email, user.password)
            .then(function (firebaseUser) {
                var ref = firebase.database().ref('users/' + firebaseUser.uid)
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

