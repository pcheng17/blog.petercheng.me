<script>
  import "../app.css";
  import "@fontsource/ubuntu-mono";
  import Header from "$lib/components/Header.svelte";
</script>

<div style="font-family: Typewriter-Light;" class="text-sm leading-6 md:text-base md:leading-7 text-black p-4 mx-auto max-w-screen-md">
  <Header />
  <div class="mt-6 mb-36">
    <slot />
  </div>
</div>

