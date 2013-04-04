
/**
 * Movies list.
 */
app.controller('MoviesCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('/data/movies.json/$').success(function(movies) {
		$scope.movies = movies;
	});
}]);