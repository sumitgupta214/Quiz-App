const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
    },
  ],
  correct: {
    type: String,
  },
});

const Question = mongoose.model("Question",quizSchema);
module.exports = Question;
