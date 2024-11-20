const mongoose = require("mongoose");
const EmploymentTypeModel = require("../models/EmploymentType");
const employmentTypes = [
  {
    name: {
      en: "On Site",
      es: "En el sitio",
      fr: "Sur site",
      hi: "स्थल पर",
    },
    value: "on_site",
  },
  {
    name: {
      en: "Remote",
      es: "Remoto",
      fr: "À distance",
      hi: "रिमोट",
    },
    value: "remote",
  },
  {
    name: {
      en: "Hybrid",
      es: "Híbrido",
      fr: "Hybride",
      hi: "हाइब्रिड",
    },
    value: "hybrid",
  },
];

const insertET = async () => {
  try {
    await mongoose.connection.db.dropCollection("employmenttypes");
    await EmploymentTypeModel.insertMany(employmentTypes);
    console.log("Employment types inserted successfully");
  } catch (error) {
    console.log("Error inserting employment types:", error.message);
  }
};

module.exports = { insertET };
