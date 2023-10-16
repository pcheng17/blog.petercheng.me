<script lang="ts">
  import Katex from '$lib/components/Katex.svelte';
  import PostMetadata from '$lib/components/PostMetadata.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Title from '$lib/components/Title.svelte';
  import { siteUrl } from '$lib/config.js';
  export let data;
  const postMeta = {
    datePublished: data.pubDate,
    tags: data.tags,
    // readTime: 5
  };

  let url: string = [siteUrl, "blog", data.slug].join("/");
  let title: string = data.title;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href={url} />
  <meta name="description" content={data.description} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={url} />

  <Katex hasMath={data.math} />
</svelte:head>

<main>
  <article>
    <Title {title} />
    <PostMetadata {...postMeta} />
    <Prose content={data.content} />
  </article>
</main>
