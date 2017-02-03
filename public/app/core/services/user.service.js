/**
 * userService Factory
 * @namespace Services
 */
(function() { // IIFE structure
    'use strict'; // Strict mode

    angular
        .module('app.core')
        .factory('userService', userService);

    userService.$inject = ['$http', 'authService'];

    /**
     * @namespace userService
     * @desc Service factory for users
     * @memberof Services
     */
    function userService($http, authService) {
        var service = {
            register: register,
            logIn: logIn,
            logOut: logOut,
            isLoggedIn: isLoggedIn,
            getUserId: getUserId,
            getEmail: getEmail,
            getEmailById: getEmailById,
            getUserType: getUserType
        };

        return service;

        /* Functions */

        // Register a new user
        function register(user) {
            return $http.post('/users/register', user).success(function(data) {
                authService.saveToken(data.token);
            });
        }

        // Log in an existing user
        function logIn(user) {
            return $http.post('/users/login', user).success(function(data) {
                authService.saveToken(data.token);
            });
        }

        // Log current user out
        function logOut() {
            authService.removeToken();
        }

        // Check if the user is logged in
        function isLoggedIn() {
            var token = authService.getToken();

            if (token) {
                var payload = authService.getPayload(token);

                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        }

        // Retrieve the _id of the user that's logged in
        function getUserId() {
            if (service.isLoggedIn()) {
                var token = authService.getToken();
                var payload = authService.getPayload(token);

                return payload._id;
            }
        }

        // Retrieve the email of the user that's logged in
        function getEmail() {
            if (service.isLoggedIn()) {
                var token = authService.getToken();
                var payload = authService.getPayload(token);

                return payload.email;
            }
        }

        // Retrieve the email of the user that's logged in
        function getEmailById(id) {
            return $http.get('/users/' + id).then(function(res) {
                return res.email;
            });
        }

        // Retrieve the usertype of the user that's logged in
        function getUserType() {
            if (service.isLoggedIn()) {
                var token = authService.getToken();
                var payload = authService.getPayload(token);

                return payload.usertype;
            }
        }
    }
})();
