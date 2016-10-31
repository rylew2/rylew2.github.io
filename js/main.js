

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



    //bootstrap nav menu hide on click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });