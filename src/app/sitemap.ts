import { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { industriesData } from '@/data/industriesData';
import { caseStudies } from '@/data/caseStudies';
import { defaultBlogs } from '@/data/defaultBlogs';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // revalidate hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pixarrow.com';
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/hire-developers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
  ];

  // Service Silo Sub-pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Industry Silo Sub-pages
  const industryRoutes: MetadataRoute.Sitemap = Object.keys(industriesData).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Fetch dynamic projects & blogs from DB
  let dynamicProjects: any[] = [];
  let dynamicBlogs: any[] = [];

  try {
    await dbConnect();
    dynamicProjects = await Project.find({ status: 'published' }).select('slug updatedAt createdAt').lean();
    dynamicBlogs = await Blog.find({ status: 'published' }).select('slug updatedAt publishedAt createdAt').lean();
  } catch (err) {
    console.error('Sitemap DB fetch error:', err);
  }

  // Case Study & Portfolio routes (Combining static + dynamic DB)
  const projectSlugMap = new Map<string, Date>();
  
  caseStudies.forEach((cs) => {
    projectSlugMap.set(cs.slug, new Date());
  });

  dynamicProjects.forEach((p: any) => {
    projectSlugMap.set(p.slug, new Date(p.updatedAt || p.createdAt || Date.now()));
  });

  const projectRoutes: MetadataRoute.Sitemap = Array.from(projectSlugMap.entries()).map(([slug, lastMod]) => ({
    url: `${baseUrl}/case-study/${slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Blog routes (Combining defaultBlogs + dynamic DB)
  const blogSlugMap = new Map<string, Date>();

  defaultBlogs.forEach((b) => {
    blogSlugMap.set(b.slug, new Date());
  });

  dynamicBlogs.forEach((b: any) => {
    blogSlugMap.set(b.slug, new Date(b.updatedAt || b.publishedAt || b.createdAt || Date.now()));
  });

  const blogRoutes: MetadataRoute.Sitemap = Array.from(blogSlugMap.entries()).map(([slug, lastMod]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: lastMod,
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}

