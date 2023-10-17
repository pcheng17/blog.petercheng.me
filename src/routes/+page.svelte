<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  export let data;
</script>

<svelte:head>
  <title>Peter Cheng</title>
</svelte:head>

<main class="">
  <ul class="block my-4">
    {#each data.posts as post}
      <li>
        <BlogPostItem {...{...post.meta, path: post.path}} />
      </li>
    {/each}
  </ul>
</main>
