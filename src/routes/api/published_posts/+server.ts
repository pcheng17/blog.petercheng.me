import type { RequestHandler } from "./$types";
import { fetchPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const allPosts = await fetchPosts();
  const currentDate = new Date();

  const sortedPosts = allPosts
    .filter((post) => !post.meta.draft)
    .filter((post) => {
      const postDate = new Date(post.meta.datePublished);
      return postDate <= currentDate;
    })
    .sort((a, b) => {
      const dateA = new Date(a.meta.datePublished);
      const dateB = new Date(b.meta.datePublished);
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
    });
  
  return json(sortedPosts);
};
