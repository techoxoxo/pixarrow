import mongoose, { Schema, model, models } from 'mongoose';

const SEOSchema = new Schema({
  pagePath: { type: String, required: true, unique: true }, // e.g. "/", "/about"
  title: { type: String, required: true },
  description: { type: String },
  keywords: { type: String },
  ogImage: { type: String },
}, { 
  timestamps: true,
  collection: 'pixarrow_seo' 
});

export default models.SEO || model('SEO', SEOSchema);
