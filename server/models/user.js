var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  user: {
      type: String
  },
  password: {
    type: String,
    required: [true, 'Fill the title please!']
  }
});

var user = mongoose.model('User', userSchema);

module.exports = user
