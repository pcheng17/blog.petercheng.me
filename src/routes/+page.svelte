<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  import BlogPostCard from '$lib/components/BlogPostCard.svelte';
  export let data;
</script>

<svelte:head>
  <title>Peter Cheng</title>
</svelte:head>

<main class="text-base/7">
  <ul class="block my-4">
    {#each data.posts as post}
      <li>
        <BlogPostCard 
          title={post.meta.title}
          datePublished={post.meta.date} 
          tags={post.meta.tags}
          description={post.meta.description} 
          path={post.path}/>
      </li>
    {/each}
  </ul>
</main>
