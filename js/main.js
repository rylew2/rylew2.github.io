

    var app = angular.module('rylew', ['ngRoute', 'angular-toArrayFilter'] );

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
                templateUrl: "partials/githubBrowser/main.html",
                controller: "MainController",
                message: 'Viewing main'
            })
            .when("/ghv/user/:username", { // : denotes a url parameter
                templateUrl: "partials/githubBrowser/user.html",
                controller: "UserController",
                message: 'Viewing user'
            })
            .when("/ghv/repo/:username/:reponame", { // :  denotes a url parameter
                templateUrl: "partials/githubBrowser/repo.html",
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
       // $scope.year = Date();

    });





 








    (function () {

        //Revealing module pattern
        //Get user and repos for user
        var github = function ($http) {
            var clientSecret = '?client_id=9b254584c151259f146a&client_secret=552ead4d53b54ebd99adf72edd017626c5f496cf';

            //Return github user profile
            var getUser = function (username) {
                return $http.get("https://api.github.com/users/" + username + clientSecret)
                      .then(function (response) {
                          return response.data;
                      });
            }
        
            //return repos for user
            var getRepos = function (user) {
                
                return $http.get(user.repos_url + clientSecret )
                            .then(function (response) {
                        
                                //for (var i = 0; i < response.data.length; i++) {
                                //    var langURL = "https://api.github.com/repos/" + user + "/" + response.data[i].name + "/" + "languages" + clientSecret ;
                                //    response.data[i].repoLanguages = $http.get(langURL );
                                //}

                                return response.data;
                            });
            };


            var getRepoDetails = function (username, reponame) {

                var repo;
                var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

                //Chained promises
                //each return is the input to the next success function
                return $http.get(repoUrl + clientSecret)
                            .then(function (response) {
                                repo = response.data;
                                return $http.get(repoUrl + "/contributors" + clientSecret);
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



    //bootstrap nav menu hide on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });