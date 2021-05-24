const router = require("express").Router();
const db = require("../model/index");


///pull all events 


router.get("/event", function (req, res) {
    db.Events.find({}).then((response) => {
        console.log(response);
        console.log("event listing");

    });

});




module.exports = router;