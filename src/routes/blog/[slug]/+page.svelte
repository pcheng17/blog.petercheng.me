<script lang="ts">
  import Katex from '$lib/components/Katex.svelte';
  import PostMetadata from '$lib/components/PostMetadata.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Title from '$lib/components/Title.svelte';
  import { siteUrl } from '$lib/config.js';
  export let data;

  let url: string = [siteUrl, "blog", data.meta.slug].join("/");
  let title: string = data.meta.title;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href={url} />
  <meta name="title" content={title} />
  <meta name="description" content={data.meta.description} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={url} />

  <Katex hasMath={data.meta.math} />
</svelte:head>

<main>
  <article>
    <Title {title} />
    <PostMetadata
      datePublished={data.meta.datePublished}
      tags={data.meta.tags}
    />
    <Prose content={data.content} />
  </article>
</main>
