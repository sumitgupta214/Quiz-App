const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dsaSchema = new Schema({
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

const DSAQuestion = mongoose.model("DSAQuestion",dsaSchema);
module.exports = DSAQuestion;