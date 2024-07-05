import mongoose from "mongoose";

const barangaySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  brgyCode: {
    type: String,
    required: false,
  },
  brgyDesc: {
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
  citymunCode: {
    type: String,
    required: false,
  },
});


export default mongoose.model('barangays', barangaySchema);
