import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/resume'].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const workRoutes = projects
    .filter((p) => p.caseStudyRoute)
    .map((p) => ({
      url: `${site.url}${p.caseStudyRoute}`,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...workRoutes];
}
