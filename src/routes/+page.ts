export const load = async ({ fetch }) => {
  const response = await fetch(`/api/published_posts`);
  const posts = await response.json();

  console.log("posts", posts.length);

  return {
    posts,
  };
};
