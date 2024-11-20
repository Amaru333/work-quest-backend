const express = require("express");
const router = express.Router();
const controller = require("../controllers/WorkingScheduleController");

router.get("/", controller.getAllWorkingSchedules);

module.exports = router;
