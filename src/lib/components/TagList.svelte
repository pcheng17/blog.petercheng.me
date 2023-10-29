<script lang="ts">
  export let tags: string[] = [];

  let sortedTags: string[] = tags.sort((a, b) => a.localeCompare(b));
</script>

<span class="text-sm">
  {#each sortedTags as tag, index}
    <span class="mr-[-2px]">
      <a href={`/tags/${tag}`} class="text-penn-red hover:text-teal">{tag}</a>{index !== tags.length - 1 ? ',' : ''}
    </span>
  {/each}
</span>
