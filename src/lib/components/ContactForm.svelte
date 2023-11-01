<script>
  import Title from "./Title.svelte";

  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    // For now, just log the details.
    console.log({ name, email, message });
    // In a real-world scenario, make an HTTP POST request to your backend.
  }
</script>

<section class="mt-10">
  <Title title="Contact me" />
  <form on:submit|preventDefault={handleSubmit}>
    <div class="mb-4">
      <label for="name" class="block font-medium mb-2">Name:</label>
      <input id="name" type="text" bind:value={name} class="input-box" required>
    </div>

    <div class="mb-4">
      <label for="email" class="block font-medium mb-2">Email:</label>
      <input id="email" type="email" bind:value={email} class="input-box" required>
    </div>

    <div class="mb-4">
      <label for="message" class="block font-medium mb-2">Message:</label>
      <textarea id="message" rows="4" bind:value={message} class="input-box" required></textarea>
    </div>

    <div>
      <button type="submit" class="border hover:bg-gray-200 active:bg-gray-300 text-black px-4 py-2 rounded-md">Submit</button>
    </div>
  </form>
</section>

<style>
  .input-box {
    @apply w-full p-2 outline-none border rounded-md;
  }
  
  .input-box:focus {
    @apply border-gray-600 border;
  }
</style>
