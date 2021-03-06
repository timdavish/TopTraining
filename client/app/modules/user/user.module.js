/**
 * User Module
 * @namespace Modules
 */
(function() { // IIFE structure
    'use strict'; // Strict mode

    angular.module('app.user', [
		/* User sub-modules */
		'user.authentication',
		'user.profile'
	]);
})();
