<script lang="ts">
  import Prose from '$lib/components/Prose.svelte';
  export let data;
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
    <Prose content={data.content} />
  </article>
</main>

<!-- <aside class="col-span-1">
  <Sidebar />
</aside> -->
