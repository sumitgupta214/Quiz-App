const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("home/home.ejs");
});

router.post("/", async(req,res)=>{
    console.log(req.body);
    res.send("Success");
});

module.exports = router;
