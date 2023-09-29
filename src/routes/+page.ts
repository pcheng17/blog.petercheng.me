export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const posts = await response.json();

  const res = await fetch('/api/tags');
  const data = await res.json();
  const tags = data.tags;

  return {
    posts,
    tags
  };
};
