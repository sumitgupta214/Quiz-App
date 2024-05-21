const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  attempts: [
    {
      type: Number,
    },
  ],
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("user", userSchema);
