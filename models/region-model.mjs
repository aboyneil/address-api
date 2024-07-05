import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  psgcCode: {
    type: String,
    required: false,
  },
  regDesc: {
    type: String,
    required: false,
  },
  regCode: {
    type: String,
    required: false,
  },
});


export default mongoose.model('regions', regionSchema);
