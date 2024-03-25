<script lang="ts">
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  import { siteTitle, siteUrl } from '$lib/config.js';

  export let data;
  let description: string = "Peter Cheng's website";

  // Pagination state
  let currentPage = 1;
  const postsPerPage = 10;
  const totalPages = Math.ceil(data.posts.length / postsPerPage);

  // Compute the slice of posts for the current page
  $: paginatedPosts = data.posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Pagination control functions
  function goToNextPage() {
    if (currentPage < totalPages) currentPage += 1;
  }

  function goToPreviousPage() {
    if (currentPage > 1) currentPage -= 1;
  }
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <link rel="canonical" href={siteUrl} />
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={siteTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={siteUrl} />
</svelte:head>

<main class="">
  <ul class="block my-4">
    {#each paginatedPosts as post}
      <li>
        <BlogPostItem 
          title={post.meta.title}
          description={post.meta.description}
          tags={post.meta.tags}
          datePublished={post.meta.datePublished}
          lastModified={post.meta.lastModified}
          path={post.path}
        />
      </li>
    {/each}
  </ul>

  <div class="text-xs text-gray-700 flex justify-center items-center space-x-4 mt-16">
    <button on:click={goToPreviousPage} disabled={currentPage === 1} class="disabled:opacity-0">
      Previous
    </button>
    <span aria-hidden="true" hidden={currentPage === 1}>|</span>
    <span class="">
      Page {currentPage} of {totalPages}
    </span>
    <span aria-hidden="true" hidden={currentPage === totalPages}>|</span>
    <button on:click={goToNextPage} disabled={currentPage === totalPages} class="disabled:opacity-0">
      Next
    </button>
  </div>
</main>
