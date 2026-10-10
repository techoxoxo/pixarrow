import mongoose, { Schema, model, models } from 'mongoose';

export interface IPartner {
  _id?: string;
  name: string;
  logo: string;
  isImage?: boolean;
  style?: string;
  websiteUrl?: string;
  caseStudySlug?: string;
  industry?: string;
  description?: string;
  order?: number;
  status: 'published' | 'draft';
  seoKeywords?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const PartnerSchema = new Schema({
  name: { type: String, required: [true, 'Brand/Partner name is required'], trim: true },
  logo: { type: String, required: [true, 'Logo image URL or text is required'] },
  isImage: { type: Boolean, default: false },
  style: { type: String, default: 'font-sans font-bold text-white/70 text-xl md:text-2xl' },
  websiteUrl: { type: String, trim: true },
  caseStudySlug: { type: String, trim: true },
  industry: { type: String, default: 'Technology & Digital' },
  description: { type: String },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  seoKeywords: [{ type: String }],
}, {
  timestamps: true,
  collection: 'pixarrow_partners'
});

export default models.Partner || model('Partner', PartnerSchema);
