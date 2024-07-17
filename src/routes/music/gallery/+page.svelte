<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import { SITE_TITLE, SITE_URL } from '$lib/config.js';
  import { musicList } from '../../../content/musicList';
  import { getFormattedDate, fixDateStr, removeDayFromDate } from "$lib/utils";

  let description: string = "An ever-growing list of my favorite music";
  let title: string = "Peter Cheng | Music gallery"

  $: sortedMusicList = [...musicList].sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
</script>

<Head title={title} description={description} url={SITE_URL}/>

<main>
  <p class="my-6">
    A gallery of the albums that I've included at least a song of on my
    page of <a href="/music" class="prose-link">favorite music</a>.
  </p>
  <section class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    {#each sortedMusicList as { title, artist, links, date, albumCover }}
      <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-400 relative group">
        <img src={albumCover} alt="{title} album cover" class="w-full object-cover" />
        <div class="absolute inset-0 bg-gray-100 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col p-4 justify-end">
          <h3 class="text-lg font-semibold">{title}</h3>
          <p>{artist}</p>
          <p class="text-sm mt-auto">{removeDayFromDate(getFormattedDate(fixDateStr(date)))}</p>
          <div class="mt-2">
            {#each links as { platform, url }}
              <a href={url} class="prose-link mr-2" target="_blank">{platform}</a>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </section>
</main>
