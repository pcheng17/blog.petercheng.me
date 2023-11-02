<script>
  import "../app.css";
  import "@fontsource/ubuntu-mono";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div style="font-family: Typewriter-Light;" class="text-base leading-7 text-black p-4 mx-auto max-w-screen-md">
  <Header />
  <div class="mt-6 mb-32">
    <slot />
  </div>
  <Footer />
</div>

