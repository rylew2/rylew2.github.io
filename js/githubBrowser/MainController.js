(function () {

    /* Main Controller*/
    app.controller('MainController', function ($scope, $interval, $location, $routeParams) {

        var onError = function (reason) {
            $scope.error = "Could not fetch the data from GitHub";
        };

        $scope.search = function (username) {
            $location.path("/ghv/user/" + username);
        };
    });
    /* End Main Controller */

    //var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    //app.controller("MainController", MainController);





})();