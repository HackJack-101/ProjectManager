'use strict';

var Task = require('./task.model');

exports.get = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	Task.findById(req.params.id, function (err, data) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(JSON.stringify(data));
		}
	});
};

exports.getAll = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	Task.find(function (err, data) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(JSON.stringify(data));
		}
	});
};

exports.add = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	var newTask = new Task(req.body);
	newTask.save(function (err) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(req.body);
		}
	});
};

exports.edit = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	Task.update({
		_id: req.params.id
	}, req.body, function (err) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(JSON.stringify(req.body));
		}
	});
};

exports.delete = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	Task.remove({
		_id: req.params.id
	}, function (err, data) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(JSON.stringify(data));
		}
	});
};