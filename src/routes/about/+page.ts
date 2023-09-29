import type { PageLoad } from "./$types";

export const load = (async () => {
  try {
    const post = await import('../../content/aboutIndex.md');
    const { title, date, math, tags } = post.metadata;
    const content = post.default;

    return {
      title,
      date,
      math,
      tags,
      content,
    };
  } catch (e: any) {
    console.error(e);
  }
}) satisfies PageLoad;
