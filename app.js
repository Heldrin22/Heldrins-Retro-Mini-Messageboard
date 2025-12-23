const express = require("express");
const app = express();
const path = require("node:path");
const mainrouter = require("./routes/mainrouter.js");

// Helps to parse URL data into JSON structure from the forms //
app.use(express.urlencoded({ extended: true }));

// Allows public files like CSS, fonts or helpers to be used.
assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Sets up the views engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Uses the router
app.use("/", mainrouter);

// Localhost Port
PORT = process.env.PORT || 10000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Listening on port: " + PORT);
});






