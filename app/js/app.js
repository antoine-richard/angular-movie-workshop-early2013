
/**
 * Application
 */
var app = angular.module('moviesApp', []);


/**
 * Routes
 */
app.config(function($routeProvider) {
 	$routeProvider.when('/movies', { controller: 'MoviesCtrl', templateUrl: 'partials/movies.html' });
});
