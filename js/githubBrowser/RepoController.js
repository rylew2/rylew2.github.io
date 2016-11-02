(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams, $http) {

        var onContributors = function (data) {
            $scope.repo = data;
            $scope.contributorTotal = data.contributors.length;
            $scope.loading = null;

            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';
            var langURL = "https://api.github.com/repos/" + username + "/" + reponame + '/stats/contributors' + clientSecret;
            $http.get(langURL).then(onStats, onError);
        };

        var onStats = function (data) {

            for (var i = 0; i < data.data.length; i++) {
                var author = data.data[i].author.login;
                var total = data.data[i].total;

                for (var j = 0; j < data.data[i].weeks.length; j++) {

                }
            }
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        //username and repo passed as URL route parameters from user.html
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame).then(onContributors, onError);

        $scope.loading = "loading";


        /* Convert unix time from github api to date */
        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            return time;
        }



    });
    /* End Repo Controller*/


})();