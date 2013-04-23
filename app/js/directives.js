/**
 * Actor tag.
 * Displays a photo next to the actor's name.
 * Unless it's Samuel Jackson who deserves a fucking better treatment!
 */
angular.module('moviesApp.directives', [])
.directive('mvActor', function() {
    return {
    	restrict: 'E',
    	replace: true,
    	scope: {
    		actor: '='
    	},
    	template: '<span>{{actor.name}}</span>',

    	link: function(scope, element, attributes) {

    		element.addClass('photo');
            element.css('background-position', '0 -'+((scope.actor.id - 1) * 48)+'px');

            if (scope.actor.name === 'Samuel L. Jackson') {
                scope.actor.name += ' !';
            }
            
    	}
    };
});
