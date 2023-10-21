import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  hobbies: {
    type: [String],
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  resume: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Register", RegisterSchema);
