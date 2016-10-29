(function () {



    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams) {

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
        .then(onRepo, onError);

    });
    /* End Repo Controller*/



    //var myapp = angular.module("rylew"); //just a reference to GitHubViewer not an instantiation/creation

    //myapp.controller("RepoController", RepoController);

})();