// User model
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // TODO: Add more fields
});

export default mongoose.model('User', userSchema);