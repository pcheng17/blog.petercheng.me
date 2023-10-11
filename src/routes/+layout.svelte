<script>
  import "../app.css";
  import "@fontsource/ubuntu-mono";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="p-4 mx-auto max-w-screen-md">
  <Header />
  <div class="mt-4 mb-24">
    <slot />
  </div>
</div>

