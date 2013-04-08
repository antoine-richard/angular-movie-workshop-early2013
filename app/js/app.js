
/**
 * Application
 */
var app = angular.module('moviesApp', []);


/**
 * Routes
 */
app.config(function($routeProvider) {
 	$routeProvider
 		.when('/movies', 					{ controller: 'MoviesCtrl',			templateUrl: 'partials/movies.html' })
 		.when('/movies/:movieId', 			{ controller: 'MovieDetailCtrl', 	templateUrl: 'partials/movie.html'  })
 		.when('/movies/:movieId/actors', 	{ controller: 'MovieActorsCtrl',	templateUrl: 'partials/actors.html' })
 		.otherwise(							{ redirectTo: '/movies' });
});
