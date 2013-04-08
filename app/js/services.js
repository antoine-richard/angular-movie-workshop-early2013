
/**
 * Service managing starred movies.
 */
app.factory('starService', function() {
	
	var starred = [];

	return {
		toggleStar: function(id) {
			starred[id] = !starred[id];
		},
		isStarred: function(id) {
			return starred[id];
		}
	}

});