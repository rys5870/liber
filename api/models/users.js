import { number } from 'framer-motion';
import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema({
firstName:String,
   
  lastName:String,
   
  email:  String,
   
  phoneNumber: String,
   isActive: Boolean,
   
  role:  String,
  
  addedDate:{ type: Date, default: Date.now },
  amount:Number,
    
  

});
  export default mongoose.model('User', userSchema);