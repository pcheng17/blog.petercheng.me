<script lang="ts">
  import SidebarHeading from '$lib/components/SidebarHeading.svelte';
  import TagCollection from '$lib/components/TagCollection.svelte';
  export let data;
</script>

<svelte:head>
  <title>{data.tag}</title>
  <meta property="og:title" content={data.tag} />
  <!-- and others -->
</svelte:head>

<main class="col-span-3">
  <h1 class="text-3xl font-bold mb-4">
    {data.tag}
  </h1>
  {#if data.posts.length === 0}
    <p class="text-gray-900">
      No posts found.
    </p>
  {:else}
    <ul class="block list-disc my-4 pl-10">
      {#each data.posts as post}
        <li>
          <a href={post.path} class="text-penn-red">
            {post.meta.title}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<aside class="col-span-1">
  <div class="mb-4">
    <div class="mb-4">
      <SidebarHeading text="Tags"/>
      <TagCollection tags={data.allTags}/>
    </div>
  </div>
</aside>
