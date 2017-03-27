/**
 * client/test/modules/event/event.routes.spec.js
 * Calendar routes tests
 * @namespace Tests
 */
(function() { // IIFE structure

	// Suite block
	describe('Unit: Calendar routes', function() {

		// Include modules before each describe or it in this block
		beforeEach(module('app'));

		// Suite block
		describe('State: events', function() {
			// Global variables inside this block
			var $state,
				$rootScope,
				state = 'events';

			// Inject dependencies
			beforeEach(inject(function(_$state_, _$rootScope_) {
				$state = _$state_;
				$rootScope = _$rootScope_;
			}));

			// Test
			it('should verify state config', function() {
				var config = $state.get(state);

				expect(config.url).toBeDefined();
				expect(config.wantToReturn).toBeTruthy();
				expect(config.requiresLoggedIn).toBeFalsy();
			});

			// Test
			it('should respond to URL', function() {
				expect($state.href(state)).toEqual('#/events');
			});
		});

		// Suite block
		describe('State: event', function() {
			// Global variables inside this block
			var $state,
				$rootScope,
				state = 'event';

			// Inject dependencies
			beforeEach(inject(function(_$state_, _$rootScope_) {
				$state = _$state_;
				$rootScope = _$rootScope_;
			}));

			// Test
			it('should verify state config', function() {
				var config = $state.get(state);

				expect(config.url).toBeDefined();
				expect(config.wantToReturn).toBeTruthy();
				expect(config.requiresLoggedIn).toBeFalsy();
			});

			// Test
			it('should respond to URL', function() {
				expect($state.href(state)).toEqual('#/events/');
			});
		});
	});
})();
