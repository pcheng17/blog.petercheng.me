<script lang="ts">
  import type { PostMetadataProps } from "$lib/types";

  export let date: PostMetadataProps['date'];
  // export let readTime: PostMetadataProps['readTime'];

  let formattedDate: string;

  $: {
    const dateObj = new Date(date);
    formattedDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  }
</script>

<div class="text-xs text-gray-400 mb-4">
  <time datetime={date}>{formattedDate}</time>
  <!-- <span class="mx-2" aria-hidden="true">•</span> -->
  <!-- <span>{readTime} min read</span> -->
</div>
