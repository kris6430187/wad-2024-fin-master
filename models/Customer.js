import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  memberNumber: { type: Number, required: true, unique: true },
  interests: { type: [String], required: false },
});

const Customer = mongoose.models.customer || mongoose.model("customer", customerSchema);

export default Customer;