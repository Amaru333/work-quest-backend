const express = require("express");
const router = express.Router();

const controller = require("../controllers/ApplicationController");

router.post("/", controller.createApplication);
router.get("/:user", controller.getApplicationsByUser);

module.exports = router;
