import mongoose, { Schema, model, models } from 'mongoose';

export interface IProjectStat {
  label: string;
  value: string;
}

export interface IProject {
  _id?: string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  category: string;
  filterCategory: string;
  year: string;
  image: string;
  metricHighlight: string;
  techStack: string[];
  stats: IProjectStat[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  order?: number;
  status: 'published' | 'draft';
  metaTitle?: string;
  metaDescription?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProjectSchema = new Schema({
  title: { type: String, required: [true, 'Project title is required'] },
  slug: { type: String, required: [true, 'Slug is required'], unique: true, index: true },
  subtitle: { type: String },
  description: { type: String, required: [true, 'Short description is required'] },
  fullDescription: { type: String },
  category: { type: String, required: [true, 'Category is required'] },
  filterCategory: { 
    type: String, 
    required: true,
    enum: ['Mobile', 'FinTech', 'eCommerce', 'Media', 'AI / Web3', 'Custom', 'All'],
    default: 'Mobile'
  },
  year: { type: String, default: () => new Date().getFullYear().toString() },
  image: { type: String, required: [true, 'Project hero image is required'] },
  metricHighlight: { type: String, default: '+100% Growth' },
  techStack: [{ type: String }],
  stats: [
    {
      label: { type: String, required: true },
      value: { type: String, required: true }
    }
  ],
  liveUrl: { type: String },
  githubUrl: { type: String },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  metaTitle: { type: String },
  metaDescription: { type: String },
}, {
  timestamps: true,
  collection: 'pixarrow_projects'
});

export default models.Project || model('Project', ProjectSchema);
