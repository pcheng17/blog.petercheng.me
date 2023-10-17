import type { RequestHandler } from "./$types";
import { fetchPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const allPosts = await fetchPosts();
  // const currentDate = DateTime.now().startOf("day");
  const currentDate = new Date();

  console.log("currentDate", currentDate);

  const sortedPosts = allPosts
    .filter((post) => !post.meta.draft)
    .filter((post) => {
      console.log("post.meta.pubDate", post.meta.pubDate);
      const postDate = new Date(post.meta.pubDate);
      console.log("postDate <= currentDate", postDate <= currentDate);
      return postDate <= currentDate;
    })
    .sort((a, b) => {
      const dateA = new Date(a.meta.pubDate);
      const dateB = new Date(b.meta.pubDate);
      return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
    });
  
  console.log("sortedPosts", sortedPosts.length);
  return json(sortedPosts);
};
