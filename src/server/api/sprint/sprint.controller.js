'use strict';

var Sprint = require('./sprint.model');

exports.get = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	Sprint.findById(req.params.id, function (err, data) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(JSON.stringify(data));
		}
	});
};

exports.getAll = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	Sprint.find(function (err, data) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(JSON.stringify(data));
		}
	});
};

exports.add = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	var newSprint = new Sprint(req.body);
	newSprint.save(function (err) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(req.body);
		}
	});
};

exports.edit = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	Sprint.update({
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
	Sprint.remove({
		_id: req.params.id
	}, function (err, data) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(JSON.stringify(data));
		}
	});
};