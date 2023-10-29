<script lang="ts">
  import TagList from "./TagList.svelte";
  import { getFormattedDate } from "$lib/utils";

  export let title: string;
  export let description: string;
  export let tags: string[];
  export let datePublished: string;
  export let lastModified: string;
  export let path: string;

  let formattedDate: string = getFormattedDate(datePublished);
</script>

<div class="my-3">
  <h1 class="text-lg"> 
    <a href={path} class="underline underline-offset-2 decoration-1 hover:text-gray-500">
      {title} 
    </a>
  </h1> 
  <div class="text-sm text-gray-700">
    <time datetime={datePublished}>{formattedDate}</time>
    {#if tags && tags.length !== 0}
      <span aria-hidden="true">•</span>
      <TagList {tags} />
    {/if}
    <!-- <div class="mt-1">
      {description}
    </div> -->
  </div>
</div>
