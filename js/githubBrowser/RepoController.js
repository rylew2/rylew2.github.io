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
            $scope.commitStats = [];
            var responseData = data.data;
            var obj = {};
            for (var i = 0; i < responseData.length; i++) {
                obj = {};
                obj.a = 0, obj.d = 0, obj.author="", obj.total = 0;
                obj.author = responseData[i].author.login;
                obj.total = responseData[i].total;

                var weeks = responseData[i].weeks;

                for (var j = 0; j < responseData[i].weeks.length; j++) {

                    obj.a = obj.a + weeks[j].a;
                
                    obj.d = obj.d + weeks[j].d;
                    
                }
                $scope.commitStats.push(obj);
                
            }

            var zzzz = 2;

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