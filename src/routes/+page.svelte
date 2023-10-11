<script lang="ts">
  import SidebarHeading from "$lib/components/SidebarHeading.svelte";
  import TagCollection from "$lib/components/TagCollection.svelte";
  export let data;
</script>

<svelte:head>
  <title>Peter Cheng</title>
</svelte:head>

<main class="text-base/7">
  <ul class="block my-4">
    {#each data.posts as post}
      <li>
        <a href={post.path} class="underline underline-offset-4 mr-1">
          {post.meta.title}
        </a>
        {#each post.meta.tags as tag, index}
          <span class="mr-2 text-gray-400 hover:underline">
            <a href={`/tags/${tag}`} class="text-sm">#{tag}</a>
          </span>
        {/each}
      </li>
    {/each}
  </ul>
  <!-- {#each data.posts as post}
    <BlogPostCard 
      title="{post.meta.title}" 
      datePublished="{post.meta.date}" 
      tags="{post.meta.tags}"
      description="{post.meta.description}" 
      path="{post.path}"/>
  {/each} -->
</main>

<!-- <aside class="col-span-1">
  <div class="mb-4">
    <div class="mb-4">
      <SidebarHeading text="Tags"/>
      <TagCollection tags={data.tags}/>
    </div>
  </div>
</aside> -->

