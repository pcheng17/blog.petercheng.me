import { json } from '@sveltejs/kit';

export const fetchPosts = async () => {
  const allPostFiles = import.meta.glob("/src/content/blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(12, -3); // hard-coded for my directory structure

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
};

export const fetchTags = async () => {
  const allPosts = await fetchPosts();
  const allTagsSet = new Set(); 
  allPosts.forEach((post) => {
    if (post.meta && Array.isArray(post.meta.tags)) {
      post.meta.tags.forEach((tag: string) => allTagsSet.add(tag));
    }
  });

  const allTagsArray = Array.from(allTagsSet);
  return allTagsArray;
};
