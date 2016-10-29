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


    var myapp = angular.module("rylew"); //just a reference to GitHubViewer not an instantiation/creation

    myapp.controller("MainController", MainController);

})();