<script lang="ts">
  export let hasMath: boolean = false;
</script>

{#if hasMath}
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
    integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww"
    crossorigin="anonymous"
  >
{/if}
