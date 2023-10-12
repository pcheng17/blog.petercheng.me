<script lang="ts">
  export let content;
</script>

<div class="prose prose-base max-w-none prose-code:font-light prose-p:my-4 prose-a:no-underline prose-a:text-penn-red hover:prose-a:underline hover:prose-a:underline-offset-2 hover:prose-a:decoration-1 prose-a:font-normal prose-code:text-[14px] prose-pre:rounded-md prose-pre:border-solid prose-pre:border-[1px] prose-pre:border-neutral-300 prose-img:mx-auto">
  <svelte:component this={content} />
</div>
