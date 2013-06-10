/* global describe:false, beforeEach:false, it:false, expect:false, module:false, inject:false, jasmine: false */

describe("MoviesCtrl", function () {
    var ctrl, scope, httpBackend;
    var stubData =  [ {"id": 0, "title": "Movie I"}, {"id": 1, "title": "Movie II"} ];

    beforeEach(module('moviesApp'));

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        httpBackend.expectGET('/server/data/movies.json/$').respond(stubData);

        scope = $rootScope.$new();
        ctrl = $controller('MoviesCtrl', { $scope: scope });
    }));

    it("should publish the received object in the scope.movies property", function () {
        expect(scope.movies).toBeUndefined();
        httpBackend.flush();
        expect(scope.movies).toEqual(stubData);
    });

});


describe("MovieDetailCtrl", function () {
    var ctrl, scope, httpBackend;
    var stubData = { "id": 1, "title": "This is a great title" };
    var mockStarService;

    beforeEach(module('moviesApp'));

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        httpBackend.expectGET('/server/data/movies.json/1/$').respond(stubData);

        mockStarService = jasmine.createSpyObj('mockStarService', ['isStarred']);
        mockStarService.isStarred.andReturn('filled');

        scope = $rootScope.$new();
        ctrl = $controller('MovieDetailCtrl', { $scope: scope, $routeParams: { movieId: 1 }, starService: mockStarService });
    }));

    it("should expose a toggleStar function in the scope", function () {
        expect(scope.toggleStar).toBeDefined();
    });

    it("should publish the received object in the scope.movie property", function () {
        expect(scope.movie).toBeUndefined();
        httpBackend.flush();
        expect(scope.movie).toEqual(stubData);
    });

    it("should test if the given movie is starred", function () {
        httpBackend.flush();
        expect(mockStarService.isStarred).toHaveBeenCalledWith(1);
    });

    it("should publish the string 'filled' in the scope.favorite property if the movie has been starred", function () {
        httpBackend.flush();
        expect(scope.favorite).toEqual('filled');
    });

});


describe("MovieActorsCtrl", function () {
    var ctrl, scope, httpBackend;
    var stubData = { "id": 1, "actors": [ { "id": 1, "name": "AnActor"}, { "id": 2, "name": "AnotherActor"} ] };

    beforeEach(module('moviesApp'));

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        httpBackend.expectGET('/server/data/movies.json/1').respond(stubData);

        scope = $rootScope.$new();
        ctrl = $controller('MovieActorsCtrl', { $scope: scope, $routeParams: { movieId: 1 } });
    }));

    it("should publish the received object in the scope.movie property", function () {
        expect(scope.movie).toBeUndefined();
        httpBackend.flush();
        expect(scope.movie).toEqual(stubData);
    });

});
