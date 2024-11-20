const EmploymentType = require("../models/employmentType");

module.exports = {
  getAllEmploymentTypes: async (req, res) => {
    try {
      const employmentTypes = await EmploymentType.find();
      res.json(employmentTypes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
