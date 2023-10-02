export const load = async ({ fetch, params }) => {
  const { tag } = params;
  const response = await fetch(`/api/posts`);
  const allPosts = await response.json();

  const posts = allPosts.filter((post) => post.meta.tags && post.meta.tags.includes(tag));

  const res = await fetch('/api/tags');
  const data = await res.json();
  const allTags = data.tags;

  return {
    tag,
    posts,
    allTags,
  };
};
