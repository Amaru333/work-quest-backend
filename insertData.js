const mongoose = require("mongoose");
const { insertET } = require("./scripts/insertET");
const { insertWS } = require("./scripts/insertWS");
const { insertJobs } = require("./scripts/insertJobs");
const { insertCompany } = require("./scripts/insertCompany");
require("dotenv").config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

const insertData = async () => {
  await connectToDB();
  try {
    // await insertET();
    // await insertWS();
    await insertJobs();
    // await insertCompany();
  } catch (error) {
    console.log("Error inserting data:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

insertData();
