<script lang="ts">
  import type { BlogPostItemProps } from "$lib/types";
  import TagList from "./TagList.svelte";
  import { getFormattedDate } from "$lib/utils";

  export let title: BlogPostItemProps["title"];
  export let pubDate: BlogPostItemProps["pubDate"];
  export let tags: BlogPostItemProps["tags"];
  export let description: BlogPostItemProps["description"];
  export let path: BlogPostItemProps["path"];

  let formattedDate: string = getFormattedDate(pubDate);
</script>

<div class="my-3">
  <h1 class="text-lg"> 
    <a href={path} class="underline underline-offset-2 decoration-1">
      {title} 
    </a>
  </h1> 
  <div class="text-sm text-gray-700">
    <time datetime={pubDate}>{formattedDate}</time>
    <span aria-hidden="true">•</span>
    <TagList {tags} />
    <!-- <div class="mt-1">
      {description}
    </div> -->
  </div>
</div>
