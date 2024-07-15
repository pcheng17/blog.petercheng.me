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

<div class="my-2">
  <div class="flex">
    <span class="flex-1">
      <a href={path} class="text-base underline underline-offset-2 decoration-1 decoration-dotted hover:decoration-solid">
        {title}
      </a>
    </span>
    <span class="text-sm text-gray-600 flex items-center">
      <time datetime={datePublished}>{formattedDate}</time>
      <!-- <div class="mt-1">
        {description}
      </div> -->
    </span>
  </div>
  <div class="leading-3 mt-[-2px]">
    {#if tags && tags.length !== 0}
      <!-- <span aria-hidden="true">•</span> -->
      <TagList {tags} />
    {/if}
  </div>
</div>
