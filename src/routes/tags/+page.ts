export const load = async ({ fetch, params }) => {
  const res = await fetch("/api/tags");
  const data = await res.json();
  const allTags = data.tags;

  return {
    allTags,
  };
};
