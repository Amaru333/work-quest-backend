const ApplicationModel = require("../models/application");

module.exports = {
  createApplication: async (req, res) => {
    try {
      const isApplicationExist = await ApplicationModel.findOne({
        job: req.body.job,
        user: req.body.user,
      });
      if (isApplicationExist && isApplicationExist.status === "saved") {
        isApplicationExist.status = "processing";
        isApplicationExist.applied_on = new Date();
        await isApplicationExist.save();
        return res.json(isApplicationExist);
      }
      const application = new ApplicationModel(req.body);
      await application.save();
      res.json(application);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  getApplicationsByUser: async (req, res) => {
    try {
      const applications = await ApplicationModel.find({ user: req.params.user })
        .populate({
          path: "job",
          populate: {
            path: "company",
            select: "name logo slug",
          },
        })
        .select("job status applied_on timeline");

      res.json(applications);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
