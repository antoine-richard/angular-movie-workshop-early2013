
angular
	.module('moviesApp', [])
	.config(function($routeProvider) {
		$routeProvider.when('/movies', { controller: 'MoviesCtrl', templateUrl: 'partials/movies.html' });
	})
	.controller('MoviesCtrl', function($scope) {
		$scope.movies = [
			{ title: "Reservoir Dogs", year: 1992 },
			{ title: "Pulp Fiction", year: 1994 },
			{ title: "Jackie Brown", year: 1997 }
		];
	});
