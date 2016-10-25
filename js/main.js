/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */




var app = angular.module('rylew', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
    .when("/projects", { templateUrl: "partials/projects.html", controller: "PageCtrl" })
    .when("/places", { templateUrl: "partials/places.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

      

        //GitHub Viewer
        .when("/ghv/main", {
            templateUrl: "partials/githubviewer/main.html",
            controller: "MainController",
            message: 'Viewing main'
        })
        .when("/ghv/user/:username", { // : denotes a parameter
            templateUrl: "partials/githubviewer/user.html",
            controller: "UserController",
            message: 'Viewing user'
        })
        .when("/ghv/repo/:username/:reponame", { // : denotes a parameter
            templateUrl: "partials/githubviewer/repo.html",
            controller: "RepoController",
            message: 'Viewing repo'
        })



    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
 // console.log("Page Controller reporting for duty.");

});


app.controller('FooterCtrl', function ($scope) {
    $scope.year = Date();

});



app.controller('MainController', function (
    $scope, $interval, $location, $routeParams) {

        var onError = function (reason) {         
            $scope.error = "Could not fetch the data from GitHub";
        };

        $scope.search = function(username) {
            // $log.info("Searching for " + username);
            $location.path("/ghv/user/" + username); 
        };  
});

app.controller('UserController', function (
        $scope, github, $routeParams) {

    //Successful return of Github user
    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function (data) {
        $scope.repos = data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the data from GitHub";
    };

    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($routeParams.username).then(onUserComplete, onError);

});

app.controller('RepoController', function (
            $scope, github, $routeParams) {

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


//bootstrap nav menu hide on click
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

(function () {

    //Revealing module pattern
    //Get user and repos for user
    var github = function ($http) {


        //Return github user profile
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                  .then(function (response) {
                      return response.data;
                  });
        }
        
        //return repos for user
        var getRepos = function (user) {
            return $http.get(user.repos_url)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getRepoDetails = function (username, reponame) {

            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            //Chained promises
            //each return is the input to the next success function
            return $http.get(repoUrl)
                        .then(function (response) {
                            repo = response.data;
                            return $http.get(repoUrl + "/contributors");
                        })
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };

    }



    var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    module.factory("github", github); //register the service with angular
    // (name of service , name of function that returns function api object ) 

})();
