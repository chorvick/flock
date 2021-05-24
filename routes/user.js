const router = require("express").Router();
const db = require("../model");
const passport = require("../passport");


// pull all users 
router.get("/user", function (req, res) {
    db.Users.find({})
        .then((response) => res.json(response))
});




module.exports = router;
