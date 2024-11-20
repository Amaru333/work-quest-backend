const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");
const Job = require("./jobs");

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
    rating: Number,
    description: String,
    feedback: {
      time: Boolean,
      benefit: Boolean,
      environment: Boolean,
      pay: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
