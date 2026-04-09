import mongoose, { Schema, model, models } from 'mongoose';

const QuerySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  source: {
    type: String,
  },
  otherSource: {
    type: String,
  },
  notes: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  type: {
    type: String,
    default: 'Discovery Call'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Use existing model if it exists, otherwise create new one
// This is critical for Next.js hot-reloading
export default models.Query || model('Query', QuerySchema, 'pixarrow_contact_queries');
