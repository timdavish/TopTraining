/**
 * user.authentication.login.spec
 * @namespace Tests
 */

// Suite block
describe('Unit: user.authentication.login', function() {

	// Include modules before each describe or it in this block
	beforeEach(module('app'));

	// Suite block
	describe('Page: login', function() {
		// Global variables inside this block
		var render,
			element,
			ctrl,
			scope;

		// Inject dependencies
		beforeEach(inject(function($injector) {
			var routeDetails = compileRouteTemplateWithController($injector, 'login', 'LogInController');

			ctrl = routeDetails.controller;
			scope = routeDetails.scope;

			render = function() {
				element = routeDetails.render();
			};
		}));
	});
});
