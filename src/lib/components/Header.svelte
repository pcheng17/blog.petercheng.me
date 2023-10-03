<script lang="ts">
  import NavBar from "./Navbar.svelte";
  import img from "$lib/assets/banner.png";
  import { siteTitle } from "$lib/config";
</script>

<header>
  <div class="mb-36">
    <a href="/" class="text-4xl font-bold text-gray-500">
      {siteTitle}
    </a>
  </div>
  <!-- <div class="w-full h-60 overflow-hidden mb-2">
    <img src={img} alt="Hero" class="w-full h-full object-cover object-center" />
  </div> -->
  <NavBar />
</header>
