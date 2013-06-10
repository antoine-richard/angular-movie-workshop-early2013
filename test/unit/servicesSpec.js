/* global describe:false, beforeEach:false, it:false, expect:false, module:false, inject:false */

describe('starService', function () {

    beforeEach(module('moviesApp'));

    describe('isStarred', function() {
        
        it('should return false when the given id is not a favorite', inject(function(starService) {
            expect(starService.isStarred("notAFavorite")).toBeFalsy();
        }));

        it('should return true when the given id is a favorite', inject(function(starService) {
            starService.toggleStar("myFavoriteMovie");
            expect(starService.isStarred("myFavoriteMovie")).toBeTruthy();
        }));

        it('should return false when the given id is no more a favorite', inject(function(starService) {
            starService.toggleStar("aMovie");
            starService.toggleStar("aMovie");
            expect(starService.isStarred("aMovie")).toBeFalsy();
        }));

    });

});