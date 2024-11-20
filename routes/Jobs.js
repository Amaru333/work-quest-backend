const express = require("express");
const router = express.Router();

const controller = require("../controllers/JobController");

router.get("/", controller.getAllJobs);
router.get("/:id/:user", controller.getJob);

module.exports = router;
