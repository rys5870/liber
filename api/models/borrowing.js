import { number } from "framer-motion";
import mongoose from "mongoose";
const { Schema } = mongoose;
const BorrowingSchema = new Schema({
  
  memberId: String,
});
export default mongoose.model("Borrowing", borrowingSchema);
