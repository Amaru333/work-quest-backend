const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employmentTypeSchema = new Schema(
  {
    name: Object,
    value: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EmploymentType", employmentTypeSchema);
