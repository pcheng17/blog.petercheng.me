<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  import Title from '$lib/components/Title.svelte';
  export let data;
</script>

<svelte:head>
  <title>{data.tag}</title>
  <meta property="og:title" content={data.tag} />
  <!-- and others -->
</svelte:head>

<main>
  <Title title={data.tag} />
  {#if data.posts.length === 0}
    <p>
      No posts found.
    </p>
  {:else}
    {#each data.posts as post}
      <BlogPostItem 
        title={post.meta.title}
        description={post.meta.description}
        tags={post.meta.tags}
        datePublished={post.meta.datePublished}
        lastModified={post.meta.lastModified}
        path={post.path}
      />
    {/each}
  {/if}
</main>
