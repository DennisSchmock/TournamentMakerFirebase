/**
 * Created by dennisschmock on 14/12/2016.
 */
angular.module('myApp').directive('dlKeyCode', dlKeyCode);

function dlKeyCode() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            $element.bind("keypress", function(event) {
                var keyCode = event.which || event.keyCode;

                if (keyCode == $attrs.code) {
                    $scope.$apply(function() {
                        $scope.$eval($attrs.dlKeyCode, {$event: event});
                    });

                }
            });
        }
    };
}

angular.module('myApp').directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

angular.module('myApp').directive('passwordCharactersValidator', function() {
    var PASSWORD_FORMATS = [
        /[^\w\s]+/, //special characters
        /[A-Z]+/, //uppercase letters
        /\w+/, //other letters
        /\d+/ //numbers
    ];

    return {
        require: 'ngModel',
        link : function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) {
                var status = true;
                angular.forEach(PASSWORD_FORMATS, function(regex) {
                    status = status && regex.test(value);
                });
                ngModel.$setValidity('password-characters', status);
                return value;
            });
        }
    }
});

angular.module('myApp').directive('matchValidator', function() {
    return {
        require: 'ngModel',
        link : function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) {
                ngModel.$setValidity('match', value == scope.$eval(attrs.matchValidator));
                return value;
            });
        }
    }
});
