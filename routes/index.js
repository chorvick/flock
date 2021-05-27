const path = require("path");
const router = require("express").Router();
const db = require("../model/index");
const userRoutes = require("./user");

router.use("/users", userRoutes);

// If no API routes return to react
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;