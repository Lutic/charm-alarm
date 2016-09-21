var app = angular.module('app',['ngRoute', 'mdl']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl : 'pages/main.html',
      title : 'Шарм Аларм',
      controller : 'Main',
      controllerAs : 'main'
    })
    .when('/test',{
      templateUrl : 'pages/test.html',
      title : 'Tecт',
      controller : 'Test',
      controllerAs : 'test',
      bodyClass: 'test'
    })
    .when('/help',{
      templateUrl : 'pages/help.html',
      title : 'Помощь',
      controller : 'Help',
      controllerAs : 'help',
      bodyClass: 'help'
    });
});

app.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title; // Title depending on the controller
    $rootScope.bodyClass = current.$$route.bodyClass;
  });
}]);

// Social buttons directive
app.directive('socialButtons', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/social_buttons.html'
  }
});