const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.post("/submitForm", controllers.submitForm);

router.get("/", controllers.getMainIndexPage);

router.get("/submitForm", controllers.getSubmitFormPage);

router.get("/messagePage", controllers.getMessagePage);

module.exports = router;
