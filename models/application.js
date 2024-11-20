const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");
const Job = require("./jobs");

const applicationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
    applied_on: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default: "processing",
    },
    timeline: {
      applied: {
        type: Date,
        default: Date.now,
      },
      shortlisted: {
        type: Date,
        required: false,
      },
      interviewed: {
        type: Date,
        required: false,
      },
      approved: {
        type: Date,
        required: false,
      },
      rejected: {
        type: Date,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);
