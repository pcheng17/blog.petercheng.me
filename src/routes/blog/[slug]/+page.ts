import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async({ params }) => {
  try {
      const slug = params.slug;
      const post = await import(`../../../content/blog/${slug}.md`);
      const { title, pubDate, description, math, tags } = post.metadata;
      const content = post.default;

      return {
        title,
        slug,
        pubDate,
        description,
        math,
        tags,
        content,
      }
  } catch (e: any) {
    throw error(404, 'Post not found');
  }
}) satisfies PageLoad;
