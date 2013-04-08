
/**
 * Movies list.
 */
app.controller('MoviesCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('/server/data/movies.json/$')
	.success(function(movies) {
		$scope.movies = movies;
	});
}]);

/**
 * Movie info sheet.
 */
app.controller('MovieDetailCtrl', ['$http', '$scope', '$routeParams', 'starService', function($http, $scope, $routeParams, starService) {
	$http.get('/data/movies.json/'+$routeParams.movieId+'/$') // Lightweight movie object
	.success(function(lightMovie) {
		$scope.movie = lightMovie;
	});
}]);

/**
 * Movie's actors.
 */
app.controller('MovieActorsCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
	$http.get('/data/movies.json/'+$routeParams.movieId) // Heavyweight movie object
	.success(function(fullMovie) {
		$scope.movie = fullMovie;
	});
}]);
