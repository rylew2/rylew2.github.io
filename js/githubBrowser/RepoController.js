(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams) {

        var onRepo = function (data) {
            $scope.repo = data;
            $scope.loading = null;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed as URL route parameters from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame).then(onRepo, onError);

        $scope.loading = "loading";

    });
    /* End Repo Controller*/


})();