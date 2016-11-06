(function () {

    app.controller('MainController', function ($scope, $interval, $location, $routeParams) {

        //not needed
        var onError = function (reason) {
            $scope.error = "Could not fetch the data from GitHub";

        };

        $scope.search = function (username) {
            $location.path("/ghv/user/" + username);
        };
    });


})();