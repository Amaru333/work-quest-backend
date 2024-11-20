const mongoose = require("mongoose");
const WorkingScheduleModel = require("../models/workingSchedule");
const workingSchedule = [
  {
    name: {
      en: "Full Time",
      es: "Tiempo completo",
      fr: "Temps plein",
      hi: "पूर्ण समय",
    },
    value: "full_time",
  },
  {
    name: {
      en: "Part Time",
      es: "Medio tiempo",
      fr: "Temps partiel",
      hi: "अर्धकालिक",
    },
    value: "part_time",
  },
  {
    name: {
      en: "Internship",
      es: "Prácticas",
      fr: "Stage",
      hi: "इंटर्नशिप",
    },
    value: "internship",
  },
  {
    name: {
      en: "Freelancing",
      es: "Trabajo independiente",
      fr: "Travail indépendant",
      hi: "फ्रीलांसिंग",
    },
    value: "freelancing",
  },
  {
    name: {
      en: "Volunteering",
      es: "Voluntariado",
      fr: "Bénévolat",
      hi: "स्वयंसेवा",
    },
    value: "volunteering",
  },
];

const insertWS = async () => {
  try {
    await mongoose.connection.db.dropCollection("workingschedules");
    await WorkingScheduleModel.insertMany(workingSchedule);
    console.log("Working Schedule inserted successfully");
  } catch (error) {
    console.log("Error inserting Working Schedule:", error.message);
  }
};

module.exports = { insertWS };
