<script lang="ts">
  import PostMetadata from '$lib/components/PostMetadata.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import { siteUrl } from '$lib/config.js';
  export let data;
  const postMeta = {
    datePublished: data.pubDate,
    tags: data.tags,
    // readTime: 5
  };

  let url: string = [siteUrl, "blog", data.slug].join("/");
</script>

<svelte:head>
  <title>{data.title}</title>
  <link rel="canonical" href={url} />
  <meta name="description" content={data.description} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={url} />

  {#if data.math}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css"
    integrity="sha384-Cqd8ihRLum0CCg8rz0hYKPoLZ3uw+gES2rXQXycqnL5pgVQIflxAUDS7ZSjITLb5"
    crossorigin="anonymous"
  />
  {/if}
</svelte:head>

<main>
  <article>
    <h1 class="text-3xl font-bold mb-4">
      {data.title}
    </h1>
    <PostMetadata {...postMeta} />
    <Prose content={data.content} />
  </article>
</main>
