const path = require("path");


const router = require("express").Router();
const db = require("../model/index");




const userRoutes = require("./user");
// const eventRoutes = require("./event")
//// warning -- do not change this line of code or everything will break -- it's magic





router.use(userRoutes);

// router.use(eventRoutes);

// If no API routes return to react

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;