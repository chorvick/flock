const path = require("path");
const router = require("express").Router();
const db = require("../model/index");
const userRoutes = require("./user");
const eventRoutes = require("./events");



router.use("/users", userRoutes);
router.use("/events", eventRoutes);
// If no API routes return to react
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;