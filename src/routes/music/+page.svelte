<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import { SITE_TITLE, SITE_URL } from '$lib/config.js';
  import { musicList } from '../../content/musicList';
  import { getFormattedDate, fixDateStr, removeDayFromDate } from "$lib/utils";

  let description: string = "An ever-growing list of my favorite music";
  let title: string = "Peter Cheng | My favorite music"

  $: sortedMusicList = [...musicList].sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
</script>

<Head title={title} description={description} url={SITE_URL}/>

<main>
  <section>
    <p class="my-4">
      A simple list of music that I've really enjoyed and would like to share! The associated date is
      when I discovered the song. See the <a href="/music/gallery" class="prose-link">gallery</a>
      version of this list!
    </p>
    {#each sortedMusicList as { title, artist, links, date}}
      <div class="">
        <div class="flex">
          <span class="flex-1">
            <span class="mr-1">
              {title} - {artist}
            </span>
            {#each links as { platform, url }}
              <a href={url} class="prose-link mr-2" target="_blank">{platform}</a>
            {/each}
          </span>
          <span class="text-sm text-gray-600 flex items-center">
            {removeDayFromDate(getFormattedDate(fixDateStr(date)))}
          </span>
        </div>
      </div>
    {/each}
  </section>
</main>
