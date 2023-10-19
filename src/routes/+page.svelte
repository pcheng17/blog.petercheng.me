<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  import { siteTitle, siteUrl } from '$lib/config.js';

  export let data;
  let description: string = "Peter Cheng's website";
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <link rel="canonical" href={siteUrl} />
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={siteTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={siteUrl} />
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
