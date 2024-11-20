const JobModel = require("../models/jobs");
const Company = require("../models/company");
const EmploymentType = require("../models/employmentType");
const WorkingSchedule = require("../models/workingSchedule");
const Application = require("../models/application");

module.exports = {
  getAllJobs: async (req, res) => {
    try {
      const jobs = await JobModel.find()
        .populate("company", "name logo slug location.city location.stateCode")
        .populate("employmentType", "name")
        .populate("workingSchedule", "name")
        .select("title company location salary tags employmentType workingSchedule createdAt");
      res.json(jobs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  getJob: async (req, res) => {
    try {
      const job = await JobModel.findById(req.params.id)
        .populate("company")
        .populate("employmentType")
        .populate("workingSchedule")
        .lean();
      let appliedDate = null;
      if (req.params.user !== "guest") {
        appliedDate = await Application.findOne({
          job: req.params.id,
          user: req.params.user,
        }).populate("applied_on status");
      }
      res.json({
        ...job,
        appliedDate: appliedDate?.applied_on || null,
        status: appliedDate?.status || null,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
