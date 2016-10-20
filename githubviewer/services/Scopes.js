﻿(function() {

    var app = angular.module("GitHubViewer"); //just a reference to GitHubViewer not an instantiation/creation

    app.factory('Scopes', function ($rootScope) {
        var mem = {};

        return {
            store: function (key, value) {
                $rootScope.$emit('scope.stored', key);
                mem[key] = value;
            },
            get: function (key) {
                return mem[key];
            }
        };

        

    });


})();