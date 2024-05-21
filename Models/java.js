const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javaSchema = new Schema({
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

const JavaQuestion = mongoose.model("JavaQuestion",javaSchema);
module.exports = JavaQuestion;