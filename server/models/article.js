var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
      type: String,
      required: [true, 'Fill the title please!']
  },
  content: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  category: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

var article = mongoose.model('Article', articleSchema);

module.exports = article
