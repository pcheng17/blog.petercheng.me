export const fetchPosts = async () => {
  const allPostFiles = import.meta.glob("/src/content/blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(12, -3); // hard-coded for my directory structure

      // TODO Fix dates here so that no one downstream needs to worry about timezones or formatting

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
};

export const fetchTags = async (): Promise<string[]> => {
  const allPosts = await fetchPosts();
  const allTagsSet = new Set<string>(); 
  allPosts.forEach((post) => {
    if (post.meta && Array.isArray(post.meta.tags)) {
      post.meta.tags.forEach((tag: string) => allTagsSet.add(tag));
    }
  });
  return Array.from(allTagsSet);
};

export const fetchYears = async (): Promise<number[]> => {
  const allPosts = await fetchPosts();
  const allYearsSet = new Set<number>();
  allPosts.forEach((post) => {
    if (post.meta && post.meta.date) {
      const year = post.meta.date.slice(0, 4);
      allYearsSet.add(Number(year));
    }
  });
  return Array.from(allYearsSet);
};

export const getFormattedDate = (date: string): string => {
  const dateObj = date.includes('T') ? new Date(`${date.split('T')[0]}T00:00:00-07:00`) : new Date(`${date}T00:00:00-07:00`);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: 'America/Los_Angeles'
  });
  return formattedDate;
}
