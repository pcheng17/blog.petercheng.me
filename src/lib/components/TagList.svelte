<script lang="ts">
  export let tags: string[] = [];
</script>

<span>
  {#each tags as tag, index}
    <span class="mr-[-2px]">
      <a href={`/tags/${tag}`} class="text-penn-red hover:text-teal">{tag}</a>{index !== tags.length - 1 ? ',' : ''}
    </span>
  {/each}
</span>
