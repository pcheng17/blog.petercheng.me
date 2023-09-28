<script lang="ts">
  import PostMetadata from '$lib/components/PostMetadata.svelte';
  export let data;
  const postMeta = {
    date: data.date,
    // readTime: 5
  };
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta property="og:title" content={data.title} />
  <!-- and others -->
  
  {#if data.math}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css"
    integrity="sha384-Cqd8ihRLum0CCg8rz0hYKPoLZ3uw+gES2rXQXycqnL5pgVQIflxAUDS7ZSjITLb5"
    crossorigin="anonymous"
  />
  {/if}
</svelte:head>

<main class="col-span-3">
  <article>
    <h1 class="text-3xl font-bold mb-4">
      {data.title}
    </h1>
    <PostMetadata {...postMeta} />
    <div class="prose text-[15px] leading-[24px] max-w-none prose-p:my-4 prose-li:my-1">
      <svelte:component this={data.content} />
    </div>
  </article>
</main>

<!-- <aside class="col-span-1">
  <Sidebar />
</aside> -->
