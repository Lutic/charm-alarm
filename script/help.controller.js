angular.module('app').controller('Help', [ '$http', function ($http) {
  var help = this;
  help.helpCenters = [];

  $http.get('/data/help-centers.json').success(function (data) {
    help.helpCenters = data;
  });

}]);