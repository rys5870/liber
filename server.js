import express from 'express';
import mongoose from 'mongoose';


 import users from './api/routs/users.js';



 mongoose.connect('mongodb+srv://r0534107876:CXtAtMRoQbhxLzAc@cluster1.doxpjwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("hi reuven");
})
 app.use('/users', users)

const PORT = 3005;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
