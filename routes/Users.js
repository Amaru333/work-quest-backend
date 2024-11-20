const express = require("express");
const router = express.Router();

const controller = require("../controllers/UserController");

router.post("/", controller.userLogin);
router.post("/register", controller.newUser);
router.put("/", controller.updateUser);
router.put("/career", controller.updateUserInfoCareer);
router.put("/education", controller.updateUserInfoEducation);
router.put("/experience", controller.updateUserInfoExperience);
router.get("/info/:userId", controller.getUserInfo);

module.exports = router;
