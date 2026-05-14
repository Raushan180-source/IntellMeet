// Meeting model
import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
  title: String,
  participants: [String],
  startTime: Date,
  // TODO: Add more fields
});

export default mongoose.model('Meeting', meetingSchema);