const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const MONGO_URL = "mongodb://127.0.0.1:27017/quizapp";
const User = require("./Models/user.js");
const flash = require("connect-flash");
const passport = require("passport");
const session = require("express-session");
const LocalStatergy = require("passport-local");
const Question = require("./Models/quiz.js");
const userRouter = require("./routes/user.js");
const homeRouter = require("./routes/home.js");
const bodyParser = require("body-parser");
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

const sessionOptions = {
  secret: "mysupersecretkey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use(flash());

//User Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStatergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Setting ViewEngine Using EJS

//Selecting Views Directory For accessing different Pages.
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
//Applying css
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.redirect("/home");
});

//connecting flash
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  next();
});

//Routes
app.use("/home",homeRouter);
app.use("/", userRouter);

//connecting Flash
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  next();
});

//Index Route

app.get("/quiz", async (req, res) => {
  if (!req.user) {
    res.redirect("/login");
  } else {
    const allQuestions = await Question.find({});
    res.render("home/quiz.ejs", { questions: allQuestions });
  }
});


const port = 3600;
app.listen(port, () => {
  console.log("Server is Running on Port 8080");
});
