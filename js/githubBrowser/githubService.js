(function () {
  
  var github = function ($http) {
    
    // Single base URL for your custom API
    var apiBase = "https://github-browser-express-backend.vercel.app/api";
    
    // Return GitHub user profile
    var getUser = function (username) {
      return $http.get(apiBase + "/user", { params: { user: username } })
        .then(function (response) {
          return response.data;
        });
    };

    // Return repos for user
    var getRepos = function (user) {
      return $http.get(apiBase + "/repo", { params: { user: user.login } })
        .then(function (response) {
          return response.data;
        });
    };

    // Return repo details (with contributors)
    var getRepoDetails = function (username, reponame) {
      var repoUrl = apiBase + "/repodetails";
      var contributorsUrl = apiBase + "/contributors";

      return $http.get(repoUrl, { params: { user: username, reponame: reponame } })
        .then(function (response) {
          var repo = response.data;
          return $http.get(contributorsUrl, { params: { user: username, reponame: reponame } })
            .then(function (response) {
              repo.contributors = response.data;
              return repo;
            });
        });
    };

    // Return languages for a repo
    var getLanguages = function (langURL) {
      var parts = langURL.split('/');
      var user = parts[4];
      var repo = parts[5];
      var newLangURL = apiBase + "/languages";

      return $http.get(newLangURL, { params: { user: user, repo: repo } })
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

  };

  var module = angular.module("rylew");
  module.factory("github", github);

})();
