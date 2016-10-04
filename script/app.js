angular.module('app', ['ngRoute', 'mdl', 'ngSanitize'])
    .config(appConfig)
    .run(appRun)
    .directive('socialButtons',socialButtons);

appConfig.$inject = ['$routeProvider'];

function appConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            title: 'Шарм Аларм',
            controller: 'Main',
            controllerAs: 'main'
        })
        .when('/test', {
            templateUrl: 'pages/test.html',
            title: 'Tecт',
            controller: 'Test',
            controllerAs: 'test',
            bodyClass: 'test'
        })
        .when('/help', {
            templateUrl: 'pages/help.html',
            title: 'Помощь',
            controller: 'Help',
            controllerAs: 'help',
            bodyClass: 'help'
        });
};

appRun.$inject = ['$rootScope', '$timeout'];

function appRun ($rootScope,$timeout) {
    $rootScope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            componentHandler.upgradeAllRegistered();
        })
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title; // Title depending on the controller
        $rootScope.bodyClass = current.$$route.bodyClass;
    });
}

function socialButtons(){
    return {
        restrict: 'E',
        templateUrl: '../templates/social_buttons.html'
    }
};