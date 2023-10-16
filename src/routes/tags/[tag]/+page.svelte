<script lang="ts">
  import BlogPostCard from '$lib/components/BlogPostItem.svelte';
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
      <BlogPostCard 
        title="{post.meta.title}" 
        datePublished="{post.meta.date}" 
        tags="{post.meta.tags}"
        description="{post.meta.description}" 
        path="{post.path}"/>
    {/each}
  {/if}
</main>
