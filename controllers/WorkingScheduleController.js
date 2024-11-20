const WorkingSchedule = require("../models/workingSchedule");

module.exports = {
  getAllWorkingSchedules: async (req, res) => {
    try {
      const workingSchedules = await WorkingSchedule.find();
      res.json(workingSchedules);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
