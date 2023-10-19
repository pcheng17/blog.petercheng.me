import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fixDateStr } from '$lib/utils';

export const load = (async({ params }) => {
  try {
      const slug = params.slug;
      const post = await import(`../../../content/blog/${slug}.md`);

      // Fix the date string so that it's in the American/Los_Angeles timezone
      post.metadata.datePublished = fixDateStr(post.metadata.datePublished);

      return {
        meta: post.metadata,
        content: post.default
      }
  } catch (e: any) {
    throw error(404, 'Post not found');
  }
}) satisfies PageLoad;
