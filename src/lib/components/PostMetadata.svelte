<script lang="ts">
  import TagList from "./TagList.svelte";
  import { getFormattedDate } from "$lib/utils";

  export let datePublished: string;
  export let tags: string[];

  let formattedDate: string = getFormattedDate(datePublished);
</script>

<div class="text-sm text-gray-700 mb-4">
  <time datetime={datePublished}>{formattedDate}</time>
  {#if tags && tags.length !== 0}
    <span aria-hidden="true">•</span>
    <TagList {tags} />
  {/if}
  <!-- <span class="mx-2" aria-hidden="true">•</span> -->
  <!-- <span>{readTime} min read</span> -->
</div>
