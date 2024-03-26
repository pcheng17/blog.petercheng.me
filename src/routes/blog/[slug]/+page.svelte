<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import PostMetadata from '$lib/components/PostMetadata.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Title from '$lib/components/Title.svelte';
  import { SITE_URL } from '$lib/config.js';
  export let data;

  let url: string = [SITE_URL, "blog", data.meta.slug].join("/");
  let title: string = data.meta.title;
</script>

<Head title={title} description={data.meta.description} hasMath={data.meta.math} url={url} />

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
