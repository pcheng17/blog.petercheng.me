<script lang="ts">
  export let content;
</script>

<div class="prose prose-base leading-7 text-black prose-h2:my-5 prose-h3:mt-4 prose-h4:mt-3 prose-strong:font-bold max-w-none prose-code:text-[12.5px] prose-code:font-light prose-p:my-4 prose-a:underline-offset-2 prose-a:decoration-1 prose-a:decoration-dotted hover:prose-a:decoration-solid prose-a:text-penn-red prose-a:font-normal prose-pre:rounded-md prose-pre:border-solid prose-pre:border-[1px] prose-pre:border-neutral-300 prose-img:mx-auto">
  <svelte:component this={content} />
</div>
