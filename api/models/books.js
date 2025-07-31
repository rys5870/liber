import { number } from "framer-motion";
import mongoose from "mongoose";
const { Schema } = mongoose;
const bookSchema = new Schema({
  Name: String,
  auother: String,
  amount: Number,
  addedDate: Date,
  Available: Number,
  isActive: Boolean,
  price: Number,
  isDegitalBook: Boolean,
  AmountBooksLeft: Number,
});
export default mongoose.model("Book", bookSchema);
