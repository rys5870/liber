import { Router } from 'express';
import User from '../models/users.js';


const router = Router();

router.post('/',async (req, res) => {
  
  console.log(req.body);
  
     const { error } = User.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const newUser = await User.create(req.body);
  res.status(201).send(newUser);
});


router.get('/', async (req, res) => {
  const users = await User.find(
  
  );
  res.status(200).send(users);
});


router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id,{isActive:true});
  if (!user) return res.status(404).send('User not found');
  res.status(200).send(user);
});


router.put('/:id', async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).send('user not found');
  res.status(200).send(user);
});


router.put('/delete/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id,{isActive:false}, { new: true });
  if (!user) return res.status(404).send('user not found');
  res.status(200).send(user);
});


export default router;