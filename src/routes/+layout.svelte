<script>
  import "../app.css";
  import "@fontsource/ubuntu-mono";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="p-4 mx-auto max-w-screen-lg">
  <div class="bg-white p-4">
    <Header />
    <div class="grid grid-cols-4 gap-8 mt-8 mb-24">
      <slot />
    </div>
  </div>
</div>

