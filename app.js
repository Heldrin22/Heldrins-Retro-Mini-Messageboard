const express = require("express");
const app = express();
const path = require("node:path");
const getNewDate = require("./public/helpers/newDate");
const messageDB = require("./messages/messageDB");

// Get messages from database external
/* const messages = require("./views/messages/messageDB.js"); */

console.log(messageDB);

// Helps to parse URL data into JSON structure from the forms //
app.use(express.urlencoded({ extended: true }));

// Allows public files like CSS, fonts or helpers to be used.
assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
/* app.use(express.static("public")); */

// Sets up the views engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Localhost Port
PORT = 3000;

const navLinks = [
  { href: "/", text: "Message Board" },
  { href: "submitForm", text: "Message Form" },
];

app.post("/submitForm", (req, res) => {
  console.log(req.body);

  const newMessage = {
    user: req.body.user,
    message: req.body.message,
    date: getNewDate(),
  };
  messageDB.push(newMessage);
  res.status(201);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index", {
    navLinks: navLinks,
    messageDB,
  });
});

app.get("/submitForm", (req, res) => {
  res.render("submitForm", { navLinks: navLinks });
});

app.get("/messagePage", (req, res) => {
  let messageView = {};

  if (req.query.data) {
    try {
      messageView = JSON.parse(decodeURIComponent(req.query.data));
    } catch (err) {
      console.error("Error decoding objects.", err);
    }
  }

  res.render("messagePage", { navLinks: navLinks, messageView });
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Listening on port: " + PORT + "\nhttp://localhost:" + PORT);
});
