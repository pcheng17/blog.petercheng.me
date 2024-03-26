<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  import Head from '$lib/components/Head.svelte';
  import { SITE_TITLE, SITE_URL, DESCRIPTION } from '$lib/config.js';

  export let data;
</script>

<Head title={SITE_TITLE} description={DESCRIPTION} />

<main class="">
  <ul class="block my-4">
    {#each data.posts as post}
      <li>
        <BlogPostItem 
          title={post.meta.title}
          description={post.meta.description}
          tags={post.meta.tags}
          datePublished={post.meta.datePublished}
          lastModified={post.meta.lastModified}
          path={post.path}
        />
      </li>
    {/each}
  </ul>
</main>
