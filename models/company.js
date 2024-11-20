const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: String,
    slug: String,
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
    industry: String,
    logo: String,
    size: String,
    about: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);
