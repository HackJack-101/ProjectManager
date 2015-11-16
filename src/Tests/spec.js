var url = 'index.html' // To complete

var url_add_p = url + '#/NewProject'
var url_add_us = url + '#/NewUserStory'
var url_add_task = url + '#/NewTask'
//var url_add_sprint = url + '#/'

var url_list_p = url + '#/Projects'
var url_list_us = url + '#/UserStories'
var url_list_task = url + '#/Tasks'
//var url_list_sprint = url + '#/'

genRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + max
}

genRandomString = function(maxLen) {
	maxLen = maxLen == undefined ? 5 : maxLen
	var res = ''
	var i

	for (i = 0; i < maxLen; ++i)
	res = res + Math.floor(Math.random() * (25)) + 122

	return res
}

// Must be called in protractor context
formCompareValues = function(urls, urld, models) {
	browser.get(urls)

	var edit_models = models
	var nb_inputs = edit_models.length
	var edit_input_values = []

	 //Filling & saving
	var i
	for (i = 0; i < edit_models.length; ++i) {
		var loc_model = edit_models[i]
		var loc = by.model(loc_model)
		var str

		tr = genRandomString()
		loc.sendKeys(str)
		edit_input_values[i] = str
	}

	// Submitting
	by.id('submit').click()

	// Visualizing
	browser.get(urld)

	// Verifying
	for (i = 0; i < edit_input_values.length; ++i) {
		expect(by.model(edit_models[i]).getText() == edit_input_values[i])
	}
}

describe('Project Manager', function() {

	/*
	 * Adding a project should push it to project list
	 * with consistent values.
	 */
	it('should allow creation of new projects', function() {
		formCompareValues(url_add_p, url_list_p, [ 'project.title', 'project.description', 'project.updated' ])
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