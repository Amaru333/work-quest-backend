const express = require("express");
const router = express.Router();

const controller = require("../controllers/CommentController");

router.post("/", controller.addComment);
router.get("/job/:jobId", controller.getCommentByJob);

module.exports = router;
