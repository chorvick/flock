const router = require("express").Router();
const { Users } = require("../model");
const passport = require("../passport");
const mongojs = require("mongojs");


// const databaseUrl = "flock";
// const collections = ["user"];

// const dbon = mongojs(databaseUrl, collections);

// dbon.on("error", error => {
//     console.log("Database Error:", error);
//   });

// router.get("/", (req, res) => {
//   res.send("Hello world");
// });

router.post("/new", (req, res) => {
  Users.create(req.body).then(response => res.json({ data: response }))
    .catch(err => res.json(err))

})
router.get("/all", (req, res) => {
  Users.find({})
    .then((response) => res.json(response))
    .catch((err) => res.setStatus(500).json(err))
  // .then((response) => res.json(response))
});


module.exports = router;
