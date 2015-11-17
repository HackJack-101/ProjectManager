'use strict';
module.exports = function (app) {
	'use strict';

	app.use('/projects', require('./api/project'));
	app.use('/tasks', require('./api/task'));
	app.use('/sprints', require('./api/sprint'));
	app.use('/userstories', require('./api/userstory'));

	app.get('/', function (req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Hello World!");
	});
};
