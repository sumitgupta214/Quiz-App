const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pythonSchema = new Schema({
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

const PythonQuestion = mongoose.model("PythonQuestion",pythonSchema);
module.exports = PythonQuestion;