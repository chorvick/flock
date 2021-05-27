const mongoose = require("mongoose");
const express = require("express");
const app = express();

const morgan = require("morgan");
const PORT = process.env.PORT || 3001;


// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/flock";
mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true },
    console.log("Connected to MongoDB!")
);

// Define middleware 
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
    res.json({ success: true })
})

app.use(require("./routes"))

// Start server
app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`);
});