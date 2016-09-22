var currentTest, tests = [];

app.controller('Main', [ '$http', function ($http) {

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
    console.log(currentTest);
    self.isCurrentTest(id);
    return currentTest;
  };

  self.isCurrentTest = function (id) {
    return currentTest === id;
  };

}]);

app.controller('Test', function () {
  this.currentTest = currentTest;
  this.tests = tests;
});

app.controller('Help', [ '$http', function ($http) {
  var help = this;
  help.helpCenters = [];

  $http.get('/data/help-centers.json').success(function (data) {
    help.helpCenters = data;
  });

}]);


