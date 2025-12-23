const messageDBQueries = require("../db_handlers/queries");
const getNewDate = require("../public/helpers/newDate");

const navLinks = [
  { href: "/", text: "Message Board" },
  { href: "submitForm", text: "Message Form" },
];

async function getMainIndexPage(req, res) {
  let messageDB = await messageDBQueries.getAllMessages();
  console.log("postgres grab: ", messageDB);
  res.render("index", {
    navLinks: navLinks,
    messageDB,
  });
}

function getSubmitFormPage(req, res) {
  res.render("submitForm", { navLinks: navLinks });
}

async function submitForm(req, res) {
  console.log(req.body);

  const newMessage = {
    username: req.body.username,
    message: req.body.message,
    date: getNewDate(),
  };
  await messageDBQueries.addToMessages(newMessage);
  res.status(201);
  res.redirect("/");
}

async function getMessagePage(req, res) {
  let messageView = {};

  if (req.query.data) {
    try {
      messageView = await JSON.parse(decodeURIComponent(req.query.data));
    } catch (err) {
      console.error("Error decoding objects.", err);
    }
  }
  console.log(messageView);
  const searchedMessage = await messageDBQueries.searchMessages(messageView);
  console.log(searchedMessage);
  res.render("messagePage", { navLinks: navLinks, searchedMessage });
}

module.exports = {
  getMainIndexPage,
  getSubmitFormPage,
  submitForm,
  getMessagePage,
};
