const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Company = require("./company");

const jobSchema = new Schema(
  {
    title: Object,
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    location: {
      city: String,
      state: String,
      country: String,
      stateCode: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    tags: [Object],
    salary: {
      currency: String,
      min: Number,
      max: Number,
    },
    jobDescription: [Object],
    requirements: [Object],
    employmentType: {
      type: Schema.Types.ObjectId,
      ref: "EmploymentType",
    },
    workingSchedule: {
      type: Schema.Types.ObjectId,
      ref: "WorkingSchedule",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
