<script lang="ts">
  import type { PostMetadataProps } from "$lib/types";

  export let datePublished: PostMetadataProps['datePublished'];
  // export let readTime: PostMetadataProps['readTime'];

  let formattedDate: string;

  $: {
    const dateObj = new Date(datePublished);
    formattedDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  }
</script>

<div class="text-xs text-gray-500 mb-4">
  <time datetime={datePublished}>{formattedDate}</time>
  <!-- <span class="mx-2" aria-hidden="true">•</span> -->
  <!-- <span>{readTime} min read</span> -->
</div>
