<script lang="ts">
  import TagCollection from '$lib/components/TagCollection.svelte';
  export let data;
</script>

<TagCollection tags={data.allTags}/>
