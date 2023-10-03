<script lang="ts">
  import SidebarHeading from '$lib/components/SidebarHeading.svelte';
  import TagCollection from '$lib/components/TagCollection.svelte';
  export let data;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<main class="col-span-3 text-[15px]/[24px]">
  <h1 class="text-3xl font-bold mb-4">
    Blog
  </h1>
  <div class="text-[15px]/7 text-gray-900">
    <p class="mb-4 ">
      A collection of my thoughts and ideas, or things I've learned and want to share. Enjoy your 
      stay!
    </p>
    <ul class="block list-disc my-4 pl-10">
      {#each data.posts as post}
        <li>
          <a href={post.path} class="text-penn-red">
            {post.meta.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</main>

<aside class="col-span-1">
  <div class="mb-4">
    <div class="mb-4">
      <SidebarHeading text="Tags"/>
      <TagCollection tags={data.tags}/>
    </div>
    <!-- <SidebarHeading text="Archives"/> -->
  </div>
</aside>
