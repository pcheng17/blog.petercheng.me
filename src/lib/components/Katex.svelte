<script lang="ts">
  export let hasMath: boolean = false;
</script>

{#if hasMath}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css"
    integrity="sha384-Cqd8ihRLum0CCg8rz0hYKPoLZ3uw+gES2rXQXycqnL5pgVQIflxAUDS7ZSjITLb5"
    crossorigin="anonymous"
  />
{/if}
