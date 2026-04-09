import mongoose, { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  image: { type: String },
  author: { type: String, default: "Pixarrow Team" },
  category: { type: String, default: "Marketing" },
  tags: [{ type: String }],
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  metaTitle: { type: String },
  metaDescription: { type: String },
  publishedAt: { type: Date, default: Date.now },
}, { 
  timestamps: true,
  collection: 'pixarrow_blogs' 
});

export default models.Blog || model('Blog', BlogSchema);
