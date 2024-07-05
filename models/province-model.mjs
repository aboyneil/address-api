import mongoose from "mongoose";

const provinceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  psgcCode: {
    type: String,
    required: false,
  },
  provDesc: {
    type: String,
    required: false,
  },
  regCode: {
    type: String,
    required: false,
  },
  provCode: {
    type: String,
    required: false,
  },
});


export default mongoose.model('provinces', provinceSchema);
