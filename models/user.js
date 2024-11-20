const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    email: String,
    name: String,
    slug: String,
    phone_number: {
      required: false,
      type: String,
    },
    password: {
      type: String,
      required: false,
      selected: false,
    },
    avatar: {
      type: String,
      required: false,
      default: "https://i.imgur.com/6VBx3io.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
