<script lang="ts">
  import NavBar from "./Navbar.svelte";
  import { siteTitle } from "$lib";
</script>

<div class="text-4xl font-bold text-gray-500 mb-24">
  {siteTitle}
</div>
<NavBar />
