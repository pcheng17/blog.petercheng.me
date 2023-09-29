import type { PageLoad } from "./$types";
import { fetchPostByPath } from "$lib/utils";

export const load = (async () => {
  return await fetchPostByPath(`../../content/about.md`);
}) satisfies PageLoad;
