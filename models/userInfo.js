const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfo = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    career: {
      about_me: String,
      skills: [String],
    },
    education: [
      {
        institution: String,
        location: String,
        from: {
          month: String,
          year: String,
        },
        to: {
          month: String,
          year: String,
        },
        education_level: String,
        field_of_study: String,
      },
    ],
    experience: [
      {
        company: String,
        location: String,
        from: {
          month: String,
          year: String,
        },
        to: {
          month: String,
          year: String,
        },
        role: String,
        field: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserInfo", userInfo);
