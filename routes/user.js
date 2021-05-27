const router = require("express").Router();
const {Users} = require("../model");
const passport = require("../passport");
const mongojs = require("mongojs");


// const databaseUrl = "flock";
// const collections = ["user"];

// const dbon = mongojs(databaseUrl, collections);

// dbon.on("error", error => {
//     console.log("Database Error:", error);
//   });

  router.get("/", (req, res) => {
    res.send("Hello world");
  });


  router.get("/user", function (req, res) {
    Users.find({})
    .then((response) => console.log(response))
        // .then((response) => res.json(response))
});


module.exports = router;
