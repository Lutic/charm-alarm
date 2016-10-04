(function () {
    'use strict';

    angular.module('app')
        .controller('Help', helpController);

    helpController.$inject = ['$http'];

    function helpController($http) {
        var help = this;
        help.helpCenters = [];

        $http.get('/data/help-centers.json')
            .then(function (data) {
                help.helpCenters = data;
            }, function (response) {
                console.log('EROROOR');
            });
    }
})();