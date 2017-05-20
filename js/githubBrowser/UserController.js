

/* User Controller */

(function() {



app.controller('UserController', function ($scope, github, $routeParams, $http, $q) {
    $scope.repos = {};
    var a = [];
    var obj = {};

    function lookup(name) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i].city === name)
                return [true, i];
        }
        return [false];
    }


    //1.) Successful return of Github user
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    // 2.) get all the repos
    var onRepos = function (data) {

        $scope.repos = data;

        var promises = [];

        for (var i = 0; i < data.length; i++) {
            var langURL = data[i].languages_url;
            // var promise = $http.get(langURL);
            var promise = github.getLanguages(langURL);
            promises.push(promise);
        }
        $q.all(promises).then(onLanguages, onError);

    };

    // 3.) get and format programming language data
    var onLanguages = function (data) {
        $scope.langTotalCount = data.length;
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            $scope.repos[i].languages = o;
            Object.keys(o).forEach(function (key, index) {
                var lines = o[key];
                var b = lookup(key);
                if (!b[0]) {
                    a.push({ 'city': key, snow: lines });
                }
                else {

                    a[b[1]].snow = a[b[1]].snow + lines;
                }

            });


        }
        $scope.langTotals = a;

        a.sort(function (a, b) {
            return b.snow - a.snow;
        });

        render(a);
        $('rect').mouseenter(function () {
          //  debugger;
            $('#city').html(this.className.animVal);
            $('#inches').html($(this).attr('id').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
        });

        $('.langTotalText').mouseenter(function () {
            var t = this.innerHTML;
            //debugger;
            var lines = $('rect.' + t)[0].id;
            $('#city').html(t);
            $('#inches').html(lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' lines');
           
        });

        //$('.langTotalText').mouseout(function () {
            
        //    var t = this.innerHTML;
        //    $('rect.' + t)[0].removeClass('textHovered');
        //    debugger;
        //});


        $scope.loading = null;
    }

    var onError = function (reason) {

        $scope.error = "Could not find this user or error returning data from GitHub.";
        $scope.chartMessage = "Error returning Github data.";

    };

    $scope.changeRepo = function (event) {

        var dataset = [];
        var total = 0;
        var x = event.currentTarget;
        var myVal;
        //  $scope.mycheck = true;
        angular.element(x).find('.languageSPAN').each(function () {
            myVal = parseInt(angular.element(this).attr("data-value"));
            total = total + myVal;
        });

        $scope.thisRepo = angular.element(x).find('a').text();


        // angular.element(x).find('input').attr('checked') = checked;
        angular.element(x).addClass("selected").siblings().removeClass("selected");
        angular.element(x).find('.languageSPAN').each(function () {
            var key = angular.element(this).attr("data-key");
            var percent = ((parseInt(angular.element(this).attr("data-value")) / total) * 100).toFixed(2);
            var o = { label: key, value: percent };
            dataset.push(o);
        });
        total = 0;


        if (dataset.length > 0) {
            $scope.chartMessage = null;
            change(dataset);
        }
        else {
            // debugger;
            $scope.chartMessage = "No languages associated with this repository.";
        }

    };


    $scope.loading = "loading";
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($routeParams.username).then(onUserComplete, onError);
    $scope.chartMessage = "Please select a repository row.";

    //selected new repository - update donut chart with new data



});



})();
