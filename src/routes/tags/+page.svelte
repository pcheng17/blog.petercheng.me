<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import Title from '$lib/components/Title.svelte';
  import Tag from '$lib/components/Tag.svelte';
  import { SITE_URL } from '$lib/config.js';
  export let data;

  let siteTitle = "Peter Cheng | Tags";
  let url: string = [SITE_URL, "tags"].join("/");
  let description: string = `Tags used across all blog posts`;
</script>

<Head title={siteTitle} {description} {url} />

<main>
  <Title title="Tags" />
  {#if data.tags.length === 0}
    <p>
      No tags found.
    </p>
  {:else}
    {#each data.tags as tag}
      <Tag tag={tag} />
    {/each}
  {/if}
</main>
