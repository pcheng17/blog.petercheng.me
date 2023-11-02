export const load = async ({ fetch, params }) => {
  const res = await fetch("/api/tags");
  const data = await res.json();
  const tags = data.tags;

  return {
    tags,
  };
};
