import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'], default: 'Applied' },
  link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Job', jobSchema);
