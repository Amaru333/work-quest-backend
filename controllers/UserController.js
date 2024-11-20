const UserModel = require("../models/user");
const UserInfoModel = require("../models/userInfo");

module.exports = {
  userLogin: async (req, res) => {
    try {
      console.log(req.body);
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user && req.body.mode === "social") {
        const newUser = new UserModel({
          name: req.body.name,
          email: req.body.email,
          avatar: req.body.avatar,
          slug: req.body.name.replace(/\s+/g, "-").toLowerCase(),
        });
        await newUser.save();
        return res.json(newUser);
      } else if (user?.password !== req.body.password) {
        return res.status(401).json({ message: "Invalid password" });
      } else {
        return res.json(user);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  newUser: async (req, res) => {
    try {
      console.log(req.body);
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ message: "Email already exists" });
      }
      const newUser = new UserModel({
        email: req.body.email,
        password: req.body.password,
      });
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
      });
      res.json(user);
    } catch {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  updateUserInfoCareer: async (req, res) => {
    try {
      const userInfo = await UserInfoModel.findOne({ user: req.body.user });
      if (!userInfo) {
        const newUserInfo = new UserInfoModel({
          user: req.body.user,
          career: req.body.career,
        });
        await newUserInfo.save();
        return res.json(newUserInfo);
      } else {
        userInfo.career = req.body.career;
        await userInfo.save();
        return res.json(userInfo);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: error.message });
    }
  },
  updateUserInfoEducation: async (req, res) => {
    try {
      const userInfo = await UserInfoModel.findOne({ user: req.body.user });
      if (!userInfo) {
        const newUserInfo = new UserInfoModel({
          user: req.body.user,
          education: req.body.education,
        });
        await newUserInfo.save();
        return res.json(newUserInfo);
      } else {
        userInfo.education = req.body.education;
        await userInfo.save();
        return res.json(userInfo);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },
  updateUserInfoExperience: async (req, res) => {
    try {
      const userInfo = await UserInfoModel.findOne({ user: req.body.user });
      if (!userInfo) {
        const newUserInfo = new UserInfoModel({
          user: req.body.user,
          experience: req.body.experience,
        });
        await newUserInfo.save();
        return res.json(newUserInfo);
      } else {
        userInfo.experience = req.body.experience;
        await userInfo.save();
        return res.json(userInfo);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },
  getUserInfo: async (req, res) => {
    try {
      const userInfo = await UserInfoModel.findOne({ user: req.params.userId });
      res.json(userInfo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
