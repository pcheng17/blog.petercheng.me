<script lang="ts">
  import type { BlogPostCardProps } from "$lib/types";
  import TagList from "./TagList.svelte";
  import { getFormattedDate } from "$lib/utils";

  // export let title: BlogPostCardProps["title"];
  // export let datePublished: BlogPostCardProps["datePublished"];
  // export let description: BlogPostCardProps["description"];

  export let title: string = "";
  export let datePublished: string = "";
  export let tags: string[] = [];
  export let description: string = "";
  export let path: string = "";

  let formattedDate: string = getFormattedDate(datePublished);
</script>

<div class="my-4">
  <h1 class="text-xl"> 
    <a href={path} class="underline underline-offset-2 decoration-1">
      {title} 
    </a>
  </h1> 
  <div class="text-sm text-gray-700 mt-1 mb-2">
    <time datetime={datePublished}>{formattedDate}</time>
    <span aria-hidden="true">•</span>
    <TagList {tags} />
  </div>
</div>
