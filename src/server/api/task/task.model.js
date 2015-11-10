'use strict';

var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	title: String,
	description: String,
	state: String,
	userStory: String,
	number: Number,
	dependancies: [Number],
	cost: Number,
	developper: String,
	closed: Boolean,
	updated: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Task", TaskSchema);