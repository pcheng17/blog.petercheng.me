<script lang="ts">
  import SidebarHeading from '$lib/components/SidebarHeading.svelte';
  // import TagCollection from '$lib/components/TagCollection.svelte';
  export let data;
</script>

<main class="col-span-3 text-[15px]/[24px]">
  <h1 class="text-3xl font-bold mb-4">
    Blog
  </h1>
  <p class="mb-4">
    A collection of my thoughts and ideas, or things I've learned and want to share. Enjoy your 
    stay!
  </p>
  <section>
    <ul class="block list-disc my-4 pl-10">
      {#each data.posts as post}
      <li>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </li>
      {/each}
    </ul>
  </section>
</main>

<aside class="col-span-1">
  <div class="mb-4">
    <SidebarHeading text="Tags"/>
    <!-- <TagCollection tags={data.tags}/> -->
  </div>
</aside>
