(function () {

    //Revealing module pattern
    //Get user and repos for user
    var github = function ($http) {
      

        //Return github user profile
        var getUser = function (username) {
            // return $http.get("https://api.github.com/users/" + username )
            return $http.get("https://damp-garden-90999.herokuapp.com/user?user=" + username)
                  .then(function (response) {
                      return response.data;
                  });
        }

        //return repos for user
        var getRepos = function (user) {
          //  "repos_url": "https://api.github.com/users/rylew2/repos",
           //return $http.get(user.repos_url )
           return $http.get("https://damp-garden-90999.herokuapp.com/repo?user=" + user.login)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getRepoDetails = function (username, reponame) {

            var repo;
            //var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
            var repoUrl = "https://damp-garden-90999.herokuapp.com/repodetails?user=" + username + '&reponame=' + reponame;

            //Chained promises
            //each return is the input to the next success function
            return $http.get(repoUrl)
                        .then(function (response) {
                            repo = response.data;
                            // return $http.get(repoUrl + "/contributors" );
                            var contributorsURL = "https://damp-garden-90999.herokuapp.com/contributors?user=" + username + '&reponame=' + reponame;
                            return $http.get(contributorsURL);

                        })
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
        };


        //return repos for user
        var getLanguages = function (langURL) {
            //https://api.github.com/repos/A/accent/languages
            var spliturl = langURL.split('/');
            var user = spliturl[4];
            var repo = spliturl[5];
            var newLangURL = "https://damp-garden-90999.herokuapp.com/languages?user=" + user + '&repo=' + repo;


            // return $http.get(langURL )
            return $http.get(newLangURL)
                .then(function (response) {
                    return response.data;
             });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getLanguages: getLanguages
        };

    }



    var module = angular.module("rylew"); //no second parameter because we're not creating a module, just trying to create a module
    module.factory("github", github); //register the service with angular
    // (name of service , name of function that returns function api object ) 





})();