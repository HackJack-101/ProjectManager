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

exports.projectModel = db.model("Workshop", workshopSchema);