const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workingScheduleSchema = new Schema(
  {
    name: Object,
    value: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WorkingSchedule", workingScheduleSchema);
