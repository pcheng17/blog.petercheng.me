<script lang="ts">
  export let content;
</script>

<div class="prose prose-base text-gray-900 max-w-none prose-p:my-4 prose-a:no-underline prose-a:text-penn-red hover:prose-a:underline prose-a:font-normal prose-code:text-[15px] prose-pre:rounded-md prose-pre:border-solid prose-pre:border-[1px] prose-pre:border-neutral-300 prose-img:mx-auto">
  <svelte:component this={content} />
</div>
