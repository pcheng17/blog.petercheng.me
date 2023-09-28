<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';
  export let tags: string[] = [];
</script>

<div>
  {#each tags as tag}
    <Tag {tag} />
  {/each}
</div>
