const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option',
  }],
});

module.exports = mongoose.model('Question', QuestionSchema);
