<script lang="ts">
  export let content;
</script>

<div class="prose prose-sm text-[15px]/[24px] text-gray-800 max-w-none prose-p:my-4 prose-a:no-underline prose-a:text-penn-red hover:prose-a:underline prose-a:font-normal">
  <svelte:component this={content} />
</div>
