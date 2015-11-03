var db = require('mongoose');

db.connect('mongodb://localhost/projects', function(err) {
  if (err) {
    throw err;
  }
});

exports.projectSchema = new db.Schema({
  title: String,
  description: String,
});

exports.projectModel = db.model("Project", exports.projectSchema);

exports.userStorySchema = new db.Schema({
  title: String,
  description: String,
  state: String,
  number: Number,
  priority: Number,
  difficulty: Number
});

exports.userStoryModel = db.model("UserStory", exports.userStorySchema);