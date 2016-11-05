(function () {

    /*Repo Controller*/
    app.controller('RepoController', function ($scope, github, $routeParams,  $http, $timeout) {

        var onContributors = function (data) {
            $scope.repo = data;
          
            $scope.contributorTotal = data.contributors.length;
            $scope.loading = null;

            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';
            var langURL = "https://api.github.com/repos/" + username + "/" + reponame + '/stats/contributors' + clientSecret;
            
            //Statistics come back with 202 status code while github computes
            // Poll until status is 200
             var doPoll = function () {
                    $http.get(langURL).then(function (response) {
                        if (response.status == 202) {
                            $scope.chartMessage = null;
                            $timeout(doPoll , 1000);
                        }
                        else if (response.status == 200) {
                            onStats(response);
                        }
                    });
                }
                doPoll();



        }; //end onContributors

        var onStats = function (data) {
            $scope.chartMessage = "resolved"
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
                    if (j == 0) {
                        $scope.firstDate = timeConverter( weeks[j].w ) ;
                    }

                    obj.a = obj.a + weeks[j].a;               
                    obj.d = obj.d + weeks[j].d;                    
                }
                $scope.commitStats.push(obj);

            }

            var chartData = [];
            

            $scope.statUserCount = 0;
            for (var i = $scope.commitStats.length-1; (i > ($scope.commitStats.length -6)) ; i--) {
                
     
                if ( ($scope.commitStats[i] != undefined) && i>=0) {
                    $scope.statUserCount++;
                    chartData.push(
                        {
                            Tasks: $scope.commitStats[i].a.toString(),
                            User: $scope.commitStats[i].author,
                            MyValue: "Additions"
                        }
                    );

                    chartData.push(
                     {
                         Tasks: $scope.commitStats[i].d.toString(),
                         User: $scope.commitStats[i].author.toString(),
                         MyValue: "Deletions"
                     }
                     );   

                }            
            }

            dimpleStacked(chartData);


        }; //end onStats

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
            var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            var time = getOrdinal(date) + ' ' + month + ' ' + year;
            return time;

            function getOrdinal(n) {
                var s = ["th", "st", "nd", "rd"],
                v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
            }
        }



    });
    /* End Repo Controller*/


})();