const express = require("express");
const router = express.Router();
const Question = require("../Models/quiz");

router.get("/", async (req, res) => {
  res.render("home/home.ejs");
});

router.post("/", async (req, res) => {
  const questions = await Question.find({});
  let correctCount = 0;
  let incorrectCount = 0;

  questions.forEach((q, index) => {
    const userAnswer = req.body[`answer${index}`];
    if (userAnswer === q.correct) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });
  const feedback = `You got ${correctCount} correct and ${incorrectCount} incorrect answers.`;
  res.render("users/profile.ejs", {user:req.user,feedback: feedback });
});

module.exports = router;
