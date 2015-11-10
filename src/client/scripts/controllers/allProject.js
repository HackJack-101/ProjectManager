'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:PopularCtrl
 * @description
 * #allMovies.js
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('AllProjectCtrl', function ($scope) {
        
        $scope.loadMovies = function(){
   	    $scope.message = "project Manager";
	    title = "Project Manager";
        };

        $scope.pageChanged = function(){
            $scope.loadMovies();
        };
        $scope.loadMovies();
  });

function TagController($scope) { $scope.message = title;
}

function TagControllerProject($scope) { $scope.message = "All Project";
}
