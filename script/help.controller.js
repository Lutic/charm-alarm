(function () {
    'use strict';

    angular.module('app')
        .controller('Help', helpController);

    helpController.$inject = ['$http'];

    function helpController($http) {
        var help = this;
        help.helpCenters = [];

        $http.get('/data/help-centers.json').success(function (data) {
            help.helpCenters = data;
        });
    }
})();