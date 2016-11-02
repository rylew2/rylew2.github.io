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

            return $http.get(user.repos_url + clientSecret)
                        .then(function (response) {
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