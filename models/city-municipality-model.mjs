import mongoose from "mongoose";

const cityMunicipalitySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  psgcCode: {
    type: String,
    required: false,
  },
  citymunDesc: {
    type: String,
    required: false,
  },
  regDesc: {
    type: String,
    required: false,
  },
  provCode: {
    type: String,
    required: false,
  },
  citymunCode: {
    type: String,
    required: false,
  },
});


export default mongoose.model('citymunicipalities', cityMunicipalitySchema);
