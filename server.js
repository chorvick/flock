const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");
const passport = require("./passport");

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets 
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// Keep track of our user's login status


app.use(routes);

// Start server
app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`);
});