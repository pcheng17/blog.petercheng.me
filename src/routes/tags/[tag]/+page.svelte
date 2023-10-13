<script lang="ts">
  import BlogPostCard from '$lib/components/BlogPostItem.svelte';
  import SidebarHeading from '$lib/components/SidebarHeading.svelte';
  import TagCollection from '$lib/components/TagCollection.svelte';
  export let data;
</script>

<svelte:head>
  <title>{data.tag}</title>
  <meta property="og:title" content={data.tag} />
  <!-- and others -->
</svelte:head>

<main>
  <h1 class="text-3xl font-bold mb-4">
    {data.tag}
  </h1>
  {#if data.posts.length === 0}
    <p class="text-gray-900">
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
