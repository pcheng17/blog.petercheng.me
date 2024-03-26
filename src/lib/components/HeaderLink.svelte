<script lang="ts">
  export let href: string = "";
</script>

<a {href} class="underline underline-offset-2 decoration-1 decoration-dotted hover:decoration-solid">
  <slot />
</a>
