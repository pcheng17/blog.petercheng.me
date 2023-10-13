<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  export let data;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<main class="">
  <h1 class="text-3xl font-bold mb-4">
    Blog
  </h1>
  <!-- <p class="mb-4 ">
    A collection of my thoughts and ideas, or things I've learned and want to share. Enjoy your 
    stay!
  </p> -->
  <ul class="block my-4">
    {#each data.posts as post}
      <li>
        <BlogPostItem
          title={post.meta.title}
          datePublished={post.meta.date} 
          tags={post.meta.tags}
          description={post.meta.description} 
          path={post.path}/>
      </li>
    {/each}
  </ul>
</main>

<!-- <aside class="col-span-1">
  <div class="mb-4">
    <div class="mb-4">
      <SidebarHeading text="Tags"/>
      <TagCollection tags={data.tags}/>
    </div>
  </div>
</aside> -->
