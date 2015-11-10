'use strict';
var server ='http://nodejs.hackjack.info/';

var projectManagerControllers = angular.module('projectManagerControllers' , []);

projectManagerControllers.controller('AllProjectCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get(server + 'Projects').
  then(function(response) {
    $scope.projects = response.data;
  }, function(error) {
    console.log(error);
  });
  $scope.deleteProjects = function(id) {
    $http.delete(server + 'Projects/' + id).
    then(function(response) {
      $http.get(server + 'Projects').
      then(function(response) {
        $scope.projects = response.data;
      }, function(error) {
        console.log(error);
      });
    }, function(error) {
      console.log(error);
    });
  };
}]);

projectManagerControllers.controller('NewProjectCtrl', function($scope, $http, $routeParams, $location) {
  $scope.submit = function() {
    $http.post(server + 'projects/', $scope.projects)
      .then(function(result) {
        console.log(result);
        $location.path("/projects");
      }, function(error) {
        console.log(error);
      });
  };
});
