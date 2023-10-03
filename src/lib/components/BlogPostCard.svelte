<script lang="ts">
  import type { BlogPostCardProps } from "$lib/types";
  import Tag from "./Tag.svelte";

  // export let title: BlogPostCardProps["title"];
  // export let datePublished: BlogPostCardProps["datePublished"];
  // export let description: BlogPostCardProps["description"];

  export let title: string = "";
  export let datePublished: string = "";
  export let tags: string[] = [];
  export let description: string = "";
  export let path: string = "";

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

<div class="my-4 text-gray-900">
  <a href={path} class="hover:underline">
    <h1 class="text-xl font-bold mb-1"> 
      {title} 
    </h1> 
  </a>
  <div class="text-xs text-gray-400 mb-2">
    <time datetime={datePublished}>{formattedDate}</time>
    <span aria-hidden="true">•</span>
    <span class="text-xs">
    {#each tags as tag, index}
      <span class="mr-[1px]">
        <a href={`/tags/${tag}`} class="text-xs text-penn-red hover:text-teal">{tag}</a>{index !== tags.length - 1 ? ',' : ''}
      </span>
    {/each}
    </span>
  </div>
  <!-- <p class="text-[15px]/7 text-gray-900">
    {description}
  </p> -->
</div>
