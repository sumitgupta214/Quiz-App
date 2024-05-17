const express = require("express");
const router = express.Router();
const User = require("../Models/user.js");
const passport = require("passport");

router.get("/signup", async (req, res) => {
  if(!req.user){
    res.render("users/signup.ejs");
  }else{
    res.redirect("/home");
  }
  
});

router.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.login(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Fun Quiz");
      res.redirect("/quiz");
    });
  } catch (e) {
    console.log(e.message);
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  if(req.user){
    res.redirect("/home");
  }else{
    res.render("users/login.ejs");
  }
  
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome to Fun Quiz");
    res.redirect("/quiz");
  }
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "You are Logged Out");
    res.redirect("/login");
  });
});

module.exports = router;
