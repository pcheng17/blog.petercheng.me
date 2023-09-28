import type { RequestHandler } from './$types';
import { fetchTags } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const allTags = await fetchTags();
  const allTagsSorted = allTags.sort((a, b) => a.localeCompare(b));
  return json({ tags: allTagsSorted });
};
