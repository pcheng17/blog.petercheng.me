import type { RequestHandler } from "./$types";
import { fetchPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";
import { DateTime, Settings } from "luxon";

// Ensure that the default zone is set to 'America/Los_Angeles'.
Settings.defaultZoneName = "America/Los_Angeles";

export const GET: RequestHandler = async () => {
  const allPosts = await fetchPosts();
  const currentDate = DateTime.now().startOf("day");

  const sortedPosts = allPosts
    .filter((post) => !post.meta.draft)
    .filter((post) => {
      const postDate = DateTime.fromISO(post.meta.pubDate, {
        zone: "America/Los_Angeles",
      });
      return postDate <= currentDate;
    })
    .sort((a, b) => {
      const dateA = DateTime.fromISO(a.meta.pubDate, {
        zone: "America/Los_Angeles",
      });
      const dateB = DateTime.fromISO(b.meta.pubDate, {
        zone: "America/Los_Angeles",
      });
      return dateB.valueOf() - dateA.valueOf();
    });

  return json(sortedPosts);
};
