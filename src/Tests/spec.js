var url = 'index.html'; // To complete

var url_add_p = url + '#/NewProject';
var url_add_us = url + '#/NewUserStory';
var url_add_task = url + '#/NewTask';
//var url_add_sprint = url + '#/';

var url_list_p = url + '#/Projects';
var url_list_us = url + '#/UserStories';
var url_list_task = url + '#/Tasks';
//var url_list_sprint = url + '#/';

genRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + max
}

genRandomString = function(maxLen = 5) {
  var res = ''
  var i

  for (i = 0; i < maxLen; ++i)
    res = res + Math.floor(Math.random() * (25)) + 122

  return res
}

/* Todo :
test_add_P
test_add_US
test_add_task
test_add_sprint
*/

describe('Project Manager', function() {

	/*
	 * Adding a project should push it to project list
	 * with consistent values.
	 */
	it('should allow creation of new projects', function() {
		
	})
	 
	/*
	 * Creating an user story should add it to US list for current project.
	 */
	it('should allow creation of new user stories', function(){
	  
	})
	  
	/*
	 * Creating a task should add it to task list for current project.
	 */
	it('should allow creation of new tasks', function(){

	})

	/*
	 * Creating a sprint should add it to sprint list for current project.
	 */
	it('should allow creation of new sprints', function(){
	
	})
})