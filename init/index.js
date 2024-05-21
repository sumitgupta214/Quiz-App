const mongoose = require("mongoose");
const initData = require("./data.js");
const DSAQuestion = require("../Models/dsa.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/quizapp";

main()
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await DSAQuestion.insertMany(initData.data);
  console.log("DATA SAVED");
};

initDB();