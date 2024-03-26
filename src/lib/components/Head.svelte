<script lang="ts">
  import Katex from "$lib/components/Katex.svelte";
  export let title: string = "";
  export let description: string = "";
  export let hasMath: boolean = false;
</script>

<svelte:head>
  <!-- Canonical URL -->
  <!-- <link rel="canonical" href={canonicalURL} /> -->

  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <!-- <meta property="og:url" content={Astro.url} /> -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <!-- <meta property="og:image" content={new URL(image, Astro.url)} /> -->

  <!-- Twitter -->
  <meta property="twitter:card" content="summary" />
  <!-- <meta property="twitter:url" content={Astro.url} /> -->
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <!-- <meta property="twitter:image" content={new URL(image, Astro.url)} /> -->
  
  <Katex hasMath={hasMath} />
</svelte:head>
