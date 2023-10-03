import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

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
    throw error(404, 'Post not found');
  }
}) satisfies PageLoad;
