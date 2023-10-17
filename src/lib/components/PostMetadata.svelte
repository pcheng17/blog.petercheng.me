<script lang="ts">
  import type { PostMetadataProps } from "$lib/types";
  import TagList from "./TagList.svelte";
  import { getFormattedDate } from "$lib/utils";

  export let pubDate: PostMetadataProps['pubDate'];
  export let tags: PostMetadataProps['tags'];

  let formattedDate: string = getFormattedDate(pubDate);
</script>

<div class="text-sm text-gray-700 mb-4">
  <time datetime={pubDate}>{formattedDate}</time>
  <span aria-hidden="true">•</span>
  <TagList {tags} />
  <!-- <span class="mx-2" aria-hidden="true">•</span> -->
  <!-- <span>{readTime} min read</span> -->
</div>
