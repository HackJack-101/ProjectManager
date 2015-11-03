var db = require('mongoose');

db.connect('mongodb://localhost/projects', function(err) {
  if (err) {
    throw err;
  }
});

exports.projectSchema = new db.Schema({
  title: String,
  description: String,
  updated: { type: Date, default: Date.now }
});

exports.projectModel = db.model("Project", exports.projectSchema);

exports.userStorySchema = new db.Schema({
  title: String,
  description: String,
  state: String,
  project: String,
  number: Number,
  priority: Number,
  difficulty: Number,
  updated: { type: Date, default: Date.now }
});

exports.userStoryModel = db.model("UserStory", exports.userStorySchema);

exports.taskSchema = new db.Schema({
  title: String,
  description: String,
  state: String,
  number: Number,
  dependancies: [Number],
  cost: Number,
  developper: String,
  closed: Boolean,
  updated: { type: Date, default: Date.now }
});

exports.taskModel = db.model("Task", exports.taskSchema);