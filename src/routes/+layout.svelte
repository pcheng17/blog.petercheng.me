<script>
  import "../app.css";
  import "@fontsource/ubuntu-mono";
  import Header from "$lib/components/Header.svelte";
</script>

<div style="font-family: Typewriter-Light;" class="text-[17px]/[30px] text-black p-4 mx-auto max-w-screen-md">
  <Header />
  <div class="mt-6 mb-24">
    <slot />
  </div>
</div>

