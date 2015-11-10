'use strict';

var mongoose = require('mongoose');

var SprintSchema = new mongoose.Schema({
	number: Number,
	startDate: Date,
	endDate: Date,
	updated: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Sprint", SprintSchema);