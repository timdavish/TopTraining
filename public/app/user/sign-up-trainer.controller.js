/**
 * Controller for sign-up-trainer.ejs
 * @namespace Controllers
 */
(function() { // IIFE structure
    'use strict'; // Strict mode

    angular
        .module('app.user')
        .controller('SignUpTrainerController', SignUpTrainerController);

    SignUpTrainerController.$inject = ['$state', 'authentication'];

    /**
     * @namespace SignUpTrainerController
     * @desc SignUpTrainer controller
     * @memberof Controllers
     */
    function SignUpTrainerController($state, authentication) {
        var vm = this;

        vm.emailFormat = "/[^@]+@[^@]+/";

        vm.signUpTrainer = signUpTrainer;

        /* Functions */

        /**
         * @name signUpTrainer
         * @desc Attempts to sign up a new trainer
         * @memberof Controllers.SignUpTrainerController
         */
        function signUpTrainer() {
            vm.user.usertype = "trainer";
            authentication.signUp(vm.user).error(function(error) {
                vm.error = error;
            }).then(function() {
                $state.go('home');
            });
        }
    }
})();
