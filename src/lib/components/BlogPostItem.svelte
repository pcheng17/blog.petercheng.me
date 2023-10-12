<script lang="ts">
  import Tag from "./Tag.svelte";
  export let path: string = "";
  export let title: string = "";
  export let tags: string[] = [];
</script>

<a href={path} class="underline underline-offset-4">
  {title}
</a>
{#each tags as tag, index}
  <!-- <span class="ml-1 text-penn-red hover:underline">
    <a href={`/tags/${tag}`} class="text-sm">#{tag}</a>
  </span> -->
  <Tag tag={tag} />
{/each}
