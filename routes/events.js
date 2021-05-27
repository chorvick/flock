const router = require("express").Router();
const { Events } = require("../model");
const passport = require("../passport");
const mongojs = require("mongojs");

///pull all events 


// router.get("/event", function (req, res) {
//     Events.find({})
//     .then((response) => console.log(response))
//         // .then((response) => res.json(response))
// });

router.post("/new", (req, res) => {
    Events.create(req.body).then(response => res.json({ data: response }))
        .catch(err => res.json(err))

})
router.get("/all", (req, res) => {
    Events.find({})
        .then((response) => res.json(response))
        .catch((err) => res.setStatus(500).json(err))
    // .then((response) => res.json(response))
});



module.exports = router;