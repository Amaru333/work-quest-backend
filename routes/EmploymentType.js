const express = require("express");
const router = express.Router();
const controller = require("../controllers/EmploymentTypeController");

router.get("/", controller.getAllEmploymentTypes);

module.exports = router;
