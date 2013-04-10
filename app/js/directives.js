/**
 * Actor tag.
 * Displays the actor's name in a span.
 * Unless it's Samuel Jackson who deserves a fucking better treatment!
 */
angular.module('moviesApp.directives', [])
.directive('mvActor', function() {
    return {
    	restrict: 'E',
    	replace: true,
    	scope: {
    		name: '='
    	},
    	template: '<span>{{name}}</span>',
    	link: function(scope, element, attributes) {
    		if (scope.name === 'Samuel L. Jackson') {
    			scope.name += ' !';
    			element.addClass('samuel');
    		}
    	}
    };
});
