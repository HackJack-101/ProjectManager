'use strict';

var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
	title: String,
	description: String,
	updated: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Project", ProjectSchema);