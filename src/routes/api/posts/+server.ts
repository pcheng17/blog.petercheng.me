import type { RequestHandler } from './$types';
import { fetchPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const allPosts = await fetchPosts();
  const sortedPosts = allPosts
    .filter((post) => !post.meta.draft)
    .sort((a, b) => new Date(b.meta.pubDate) - new Date(a.meta.pubDate));
  return json(sortedPosts);
};
