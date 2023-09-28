<script lang="ts">
  import NavLink from "./NavLink.svelte";
</script>

<nav class="text-[15px] space-x-8 py-2 border-b border-t">
  <NavLink href="/" text="Home" />
  <NavLink href="/blog" text="Blog" />
  <NavLink href="/talks" text="Talks" />
  <NavLink href="/projects" text="Projects" />
  <NavLink href="/contact" text="Contact" />
  <NavLink href="/about" text="About" />
</nav>
