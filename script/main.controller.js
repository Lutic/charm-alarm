var currentTest, currentTestTitle, tests = [];

angular.module('app')
    .controller('Main', [ '$http', function ($http) {

  var self = this;

  $http.get('/data/tests.json').success(function (data) {
    tests = data;
    self.tests = tests;
  });

  self.testChoice = function (id, status) {
    if (status === 'open') {
      currentTest = id;
    } else {
      currentTest = null;
    }

    self.isCurrentTest(id);
    currentTestTitle = currentTest ? self.tests[currentTest].title : '';

    return currentTest;
  };

  self.isCurrentTest = function (id) {
    return currentTest === id;
  };

}]);


