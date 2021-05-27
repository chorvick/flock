const router = require("express").Router();
const {Events} = require("../model");
const passport = require("../passport");
const mongojs = require("mongojs");

///pull all events 


router.get("/event", function (req, res) {
    Events.find({})
    .then((response) => console.log(response))
        // .then((response) => res.json(response))
});




module.exports = router;