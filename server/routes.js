'use strict';
module.exports = function (app) {
	'use strict';

	app.use('/projects', require('./api/project'));

	app.route('/', function (req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Hello World!");
	});
};