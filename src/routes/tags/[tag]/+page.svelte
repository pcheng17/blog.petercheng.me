<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import BlogPostItem from '$lib/components/BlogPostItem.svelte';
  import Title from '$lib/components/Title.svelte';
  import { SITE_URL } from '$lib/config.js';
  export let data;

  let siteTitle = "Peter Cheng | " + data.tag;
  let url: string = [SITE_URL, "tags", data.tag].join("/");
  let description: string = `Posts with the tag ${data.tag}`;
</script>


<Head title={siteTitle} {description} {url} />

<main>
  <Title title={data.tag} />
  {#if data.posts.length === 0}
    <p>
      No posts found.
    </p>
  {:else}
    {#each data.posts as post}
      <BlogPostItem
        title={post.meta.title}
        description={post.meta.description}
        tags={post.meta.tags}
        datePublished={post.meta.datePublished}
        lastModified={post.meta.lastModified}
        path={post.path}
      />
    {/each}
  {/if}
</main>
