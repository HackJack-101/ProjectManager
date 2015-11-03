'use strict';

/**
 * @ngdoc overview
 * @name coursExoApp
 * @description
 * # coursExoApp
 *
 * Main module of the application.
 */
angular
  .module('coursExoApp', [
    'ngRoute', 'ui.bootstrap'
  ]) 
 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/project.html',
        controller: 'AllProjectCtrl'
      }) 
       .when('/Projects', {
        templateUrl: 'views/project.html',
        controller: 'AllProjectCtrl'
      })
      .when('/UsersStories', {
        templateUrl: 'views/user_story.html',
        controller: 'UserStoryCtrl'
      })
      .when('/Profiles', {
        templateUrl: 'views/profiles.html',
        controller: 'AllProjectCtrl'
      })
     .when('/NewUserStory', {
        templateUrl: 'views/new_user_story.html',
        controller: 'newUserStoryCtrl'
      })
     .when('/NewProject', {
        templateUrl: 'views/new_project.html',
        controller: 'newProjectCtrl'
      })
      	 .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'AllProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
var title = "Project Manager";
