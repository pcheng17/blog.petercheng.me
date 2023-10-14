<script lang="ts">
  import type { PostMetadataProps } from "$lib/types";

  export let datePublished: PostMetadataProps['datePublished'];
  export let tags: PostMetadataProps['tags'];
  // export let readTime: PostMetadataProps['readTime'];

  let formattedDate: string;

  $: {
    const dateObj = new Date(`${datePublished.split('T')[0]}T00:00:00-07:00`);
    formattedDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'America/Los_Angeles'
    });
  }
</script>

<div class="text-sm text-gray-700 mb-4">
  <time datetime={datePublished}>{formattedDate}</time>
  <span aria-hidden="true">•</span>
  <span class="text-sm">
  {#each tags as tag, index}
    <span class="mr-[1px]">
      <a href={`/tags/${tag}`} class="text-penn-red hover:text-teal">{tag}</a>{index !== tags.length - 1 ? ',' : ''}
    </span>
  {/each}
  </span>
  <!-- <span class="mx-2" aria-hidden="true">•</span> -->
  <!-- <span>{readTime} min read</span> -->
</div>
