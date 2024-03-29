//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [

            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angularfire/dist/angularfire.js',


            'app.js',


            'components/*.js',
            'Tournaments/tournamentController.js',
            'Players/PlayerCtrl.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
