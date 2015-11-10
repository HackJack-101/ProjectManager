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
    'ngRoute', 'ui.bootstrap', 'projectManagerControllers'
  ]) 
 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/project.html',
        controller: 'AllProjectCtrl'
      }) 
       .when('/Projects', {
        templateUrl: 'views/projects.html',
        controller: 'AllProjectCtrl'
      })
      .when('/UsersStories', {
        templateUrl: 'views/user_story.html',
        controller: 'UserStoryCtrl'
      })
      .when('/Tasks', {
        templateUrl: 'views/tasks.html',
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
     .when('/NewTask', {
        templateUrl: 'views/new_task.html',
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
  
var title;
