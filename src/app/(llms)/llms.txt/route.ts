import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";

const allPosts = getAllPosts();

const content = `# muneeburrehman.com

> A minimal portfolio, security toolkit, and blog to showcase my work as an Offensive Security Engineer.

- [About](${SITE_INFO.url}/about.md): Who I am, my journey in cybersecurity, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Freelance offensive security engineer work and key engagements.
- [Projects](${SITE_INFO.url}/projects.md): Security tools, scanners, and frameworks I’ve built or contributed to.
- [Awards](${SITE_INFO.url}/awards.md): Recognitions, CTF achievements, and security accolades.
- [Certifications](${SITE_INFO.url}/certifications.md): Cybersecurity certifications and credentials I’ve earned.
- [Education](${SITE_INFO.url}/education.md): Academic path, including BS Cyber Security at Islamia University Bahawalpur.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
