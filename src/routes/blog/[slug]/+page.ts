import type { PageLoad } from './$types';

export const load = (async({ params }) => {
  try {
      const post = await import(`../../../content/blog/${params.slug}.md`);
      const { title, date, math } = post.metadata;
      const content = post.default;

      return {
        title,
        date,
        math,
        content,
      }
  } catch (e: any) {
    console.error(e);
  }
}) satisfies PageLoad;
