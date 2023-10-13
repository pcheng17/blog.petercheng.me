<script>
  import "../app.css";
  import "@fontsource/ubuntu-mono";
  import Header from "$lib/components/Header.svelte";
</script>

<div style="font-family: Typewriter-Light;" class="text-base leading-7 text-gray-900 p-4 mx-auto max-w-screen-md">
  <Header />
  <div class="mt-5 mb-24">
    <slot />
  </div>
</div>

