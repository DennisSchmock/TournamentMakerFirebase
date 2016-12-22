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