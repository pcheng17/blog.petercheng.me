<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  import { SITE_TITLE, SITE_URL } from '$lib/config.js';

  export let data;
  let description: string = "Peter Cheng's website";
</script>

<svelte:head>
  <title>{SITE_TITLE}</title>
  <link rel="canonical" href={SITE_URL} />
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={SITE_TITLE} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={SITE_URL} />
</svelte:head>

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
