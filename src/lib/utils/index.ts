export const fetchPosts = async () => {
  const allPostFiles = import.meta.glob("/src/content/blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(12, -3); // hard-coded for my directory structure

      // Fix the date string so that it's in the American/Los_Angeles timezone
      if (metadata.datePublished) {
        metadata.datePublished = fixDateStr(metadata.datePublished);
      }

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
    if (post.meta && Array.isArray(post.meta.tags) && !post.meta.draft) {
      post.meta.tags.forEach((tag: string) => allTagsSet.add(tag));
    }
  });
  return Array.from(allTagsSet);
};

export const fetchYears = async (): Promise<number[]> => {
  const allPosts = await fetchPosts();
  const allYearsSet = new Set<number>();
  allPosts.forEach((post) => {
    if (post.meta && post.meta.date && !post.meta.draft) {
      const year = post.meta.date.slice(0, 4);
      allYearsSet.add(Number(year));
    }
  });
  return Array.from(allYearsSet);
};

export const fixDateStr = (date: string): string => {
  return date.includes('T') ? `${date.split('T')[0]}T00:00:00-07:00` : `${date}T00:00:00-07:00`;
}

export const getFormattedDate = (date: string): string => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: 'America/Los_Angeles'
  });
  return formattedDate;
}

type Footnotes = {
  [key: string]: string;
};

export function renderWithFootnotes(content: string): string {
  // Regular expression to match footnote references
  const footnoteRefRegex: RegExp = /\[\^(\w+)\]/g;

  // Regular expression to match footnote content
  const footnoteContentRegex: RegExp = /\[\^(\w+)\]:\s*(.*)/g;

  // Storing footnote content in a Object
  const footnotes: Footnotes = {};

  // Find and store footnote content
  content = content.replace(
    footnoteContentRegex,
    (_, index: string, text: string) => {
      footnotes[index] = text;
      return "";
    }
  );

  // Replace footnote references with HTML markup
  content = content.replace(footnoteRefRegex, (_, index: string) => {
    const footnoteText = footnotes[index];
    if (footnoteText) {
      return `<sup><a href="#fn${index}" id="fnref${index}">${index}</a></sup>`;
    } else {
      return _; // If no corresponding content is found, keep the reference as is
    }
  });

  // Generate the HTML for the footnotes section
  let footnotesHTML: string = '<hr><section class="footnotes"><ol>';
  for (const index in footnotes) {
    let footNoteContent = footnotes[index];
    footnotesHTML += `<li id="fn${index}">${footNoteContent} <a href="#fnref${index}" title="Jump back to reference">↩</a></li>`;
  }
  footnotesHTML += "</ol></section>";

  // Append the footnotes section to the content
  content += footnotesHTML;

  return content;
}
