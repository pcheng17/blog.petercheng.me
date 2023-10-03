<script lang="ts">
  import SidebarHeading from "$lib/components/SidebarHeading.svelte";
  import TagCollection from "$lib/components/TagCollection.svelte";
  export let data;
</script>

<svelte:head>
  <title>Peter Cheng</title>
</svelte:head>

<main class="col-span-3 text-[15px]/[24px]">
  <div class="text-[15px]/7 text-gray-900">
    <p class="mb-4 ">
      An incomplete yet ever-growing collection of notes on things I've learned. Enjoy your time browsing!
    </p>
    <ul class="block list-disc my-4 pl-10">
      {#each data.posts as post}
        <li>
          <a href={post.path} class="text-penn-red hover:underline mr-1 text-base">
            {post.meta.title}
          </a>
          {#each post.meta.tags as tag, index}
            <span class="mr-2 text-gray-400 hover:underline">
              <a href={`/tags/${tag}`} class="text-xs">#{tag}</a>
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

