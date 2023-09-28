<script lang="ts">
  import NavBar from "./Navbar.svelte";
  // import img from "$lib/images/banner.png";
  import { siteTitle } from "$lib/config";
</script>

<header>
  <div class="mb-36">
    <a href="/" class="text-4xl font-bold text-gray-500">
      {siteTitle}
    </a>
  </div>
  <!-- <img src={img} alt="Hero" class="mb-2" /> -->
  <NavBar />
</header>
