import { NextResponse } from 'next/server';
import { pingIndexNow } from '@/lib/indexnow';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import Blog from '@/models/Blog';
import { caseStudies } from '@/data/caseStudies';
import { defaultBlogs } from '@/data/defaultBlogs';
import { servicesData } from '@/data/servicesData';
import { industriesData } from '@/data/industriesData';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    let urlsToPing: string[] = [];

    try {
      const body = await request.json();
      if (body.urls && Array.isArray(body.urls)) {
        urlsToPing = body.urls;
      }
    } catch {
      // If empty body, collect ALL site URLs for full site instant index!
    }

    if (urlsToPing.length === 0) {
      // Build comprehensive list of all site URLs
      const baseUrl = 'https://pixarrow.com';
      const corePages = [
        baseUrl,
        `${baseUrl}/work`,
        `${baseUrl}/services`,
        `${baseUrl}/about`,
        `${baseUrl}/blog`,
        `${baseUrl}/calculator`,
        `${baseUrl}/book`,
        `${baseUrl}/process`,
        `${baseUrl}/industries`,
        `${baseUrl}/hire-developers`,
        `${baseUrl}/legal/privacy-policy`,
        `${baseUrl}/legal/terms`,
      ];

      const servicePages = Object.keys(servicesData).map(slug => `${baseUrl}/services/${slug}`);
      const industryPages = Object.keys(industriesData).map(slug => `${baseUrl}/industries/${slug}`);

      let projectPages = caseStudies.map(cs => `${baseUrl}/case-study/${cs.slug}`);
      let blogPages = defaultBlogs.map(b => `${baseUrl}/blog/${b.slug}`);

      try {
        await dbConnect();
        const dbProjects = await Project.find({ status: 'published' }).lean();
        if (dbProjects && dbProjects.length > 0) {
          projectPages = dbProjects.map((p: any) => `${baseUrl}/case-study/${p.slug}`);
        }

        const dbBlogs = await Blog.find({ status: 'published' }).lean();
        if (dbBlogs && dbBlogs.length > 0) {
          blogPages = dbBlogs.map((b: any) => `${baseUrl}/blog/${b.slug}`);
        }
      } catch (err) {
        console.warn("Database fetch note in indexnow route:", err);
      }

      urlsToPing = Array.from(new Set([
        ...corePages,
        ...servicePages,
        ...industryPages,
        ...projectPages,
        ...blogPages,
      ]));
    }

    const indexNowResult = await pingIndexNow(urlsToPing);

    return NextResponse.json({
      success: true,
      message: `Submitted ${urlsToPing.length} URLs to Bing, Yahoo, Yandex & IndexNow Network!`,
      urlsCount: urlsToPing.length,
      urls: urlsToPing,
      result: indexNowResult,
    });
  } catch (error: any) {
    console.error('IndexNow Route Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to ping IndexNow' },
      { status: 500 }
    );
  }
}
