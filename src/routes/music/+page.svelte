<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import Title from '$lib/components/Title.svelte';
  import { SITE_TITLE, SITE_URL } from '$lib/config.js';
  import { musicList } from '../../content/musicList';

  let description: string = "An ever-growing list of my favorite music";
  let title: string = ""

  // Helper function to convert month name to number
  const monthToNumber = (month: string) => {
    const months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    return months[month] || 0;
  };

  // Sort the music list by year and month in descending order
  $: sortedMusicList = [...musicList].sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return monthToNumber(b.month) - monthToNumber(a.month);
  });
</script>

<Head title={SITE_TITLE} description={description} url={SITE_URL}/>

<main>
  <Title {title} />
  <section>
    <p class="my-4">
      An ever-growing list of music that I've enjoyed.
    </p>
    {#each sortedMusicList as { title, artist, links, month, year}}
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
            {month} {year}
          </span>
        </div>
      </div>
    {/each}
  </section>
</main>
