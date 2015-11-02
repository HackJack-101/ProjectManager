'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:PopularCtrl
 * @description
 * #allMovies.js
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('TypesCtrl', function ($scope) {
        
        $scope.loadMovies = function(){
   	    $scope.movies = data;
	  $scope.message ="Users stories";
        };

        $scope.pageChanged = function(){
            $scope.loadMovies();
        };
        $scope.loadMovies();
  });
