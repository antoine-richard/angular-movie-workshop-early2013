/* global app:false */

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
    $http.get('/server/data/movies.json/'+$routeParams.movieId+'/$') // Lightweight movie object
    .success(function(lightweightMovie) {
        $scope.movie = lightweightMovie;
        $scope.favorite = starService.isStarred(lightweightMovie.id) ? "filled" : "";
    });
    $scope.toggleStar = function(id) {
        starService.toggleStar(id);
        $scope.favorite = starService.isStarred(id) ? "filled" : "";
    };
}]);

/**
 * Movie's actors.
 */
app.controller('MovieActorsCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
    $http.get('/server/data/movies.json/'+$routeParams.movieId) // Heavyweight movie object
    .success(function(fullMovie) {
        $scope.movie = fullMovie;
    });
}]);
