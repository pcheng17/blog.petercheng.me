<script lang="ts">
  import SidebarHeading from "$lib/components/SidebarHeading.svelte";
  import TagCollection from "$lib/components/TagCollection.svelte";
  export let data;
</script>

<main class="col-span-3">
  <h1 class="text-3xl font-bold mb-4">
    Malesuada fames ac turpis egestas
  </h1>
  <div class="text-[15px]/[24px]">
    <p class="mb-4">
      Hello, world! I now have a little corner on the interwebs all to myself.
    </p>
    <p class="mb-4">
      I’m planning to use this space as a way to record things that I learn that I want to save for
      my future self. Back in school, I was never much of a note-taker, but I’ve begun to realize
      the importance of writing things down. Our brains are great at producing new ideas, but
      terrible at remembering things.
    </p>
    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Tempus
      imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. In fermentum posuere urna
      nec. Lorem ipsum dolor sit amet consectetur. Libero volutpat sed cras ornare. Diam volutpat
      commodo sed egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.
      Egestas maecenas pharetra convallis posuere morbi leo. Gravida neque convallis a cras semper
      auctor neque. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.  Egestas
      pretium aenean pharetra magna ac placerat. Consequat id porta nibh venenatis. Mollis aliquam
      ut porttitor leo a. A diam maecenas sed enim. Consectetur adipiscing elit pellentesque
      habitant morbi tristique senectus et. Nullam eget felis eget nunc lobortis mattis. Pretium
      aenean pharetra magna ac placerat vestibulum.
    </p>

    <p class="mb-4">
      Netus et malesuada fames ac turpis. Maecenas volutpat blandit aliquam etiam erat. Placerat duis
      ultricies lacus sed turpis tincidunt id. Facilisis gravida neque convallis a cras semper auctor
      neque. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Viverra tellus in hac
      habitasse platea dictumst vestibulum rhoncus. Ac odio tempor orci dapibus ultrices. Felis eget
      velit aliquet sagittis id consectetur purus ut. Semper feugiat nibh sed pulvinar proin gravida.
      Sed augue lacus viverra vitae congue eu consequat ac felis. Morbi tristique senectus et netus et
      malesuada fames ac turpis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue
      eget. Interdum varius sit amet mattis. Aliquam eleifend mi in nulla posuere sollicitudin aliquam
      ultrices. Est placerat in egestas erat imperdiet sed euismod nisi. Commodo nulla facilisi nullam
      vehicula. A diam sollicitudin tempor id eu nisl nunc mi ipsum.
    </p>

    <p class="mb-4">
      Eget sit amet tellus cras adipiscing enim eu turpis. Pretium lectus quam id leo in vitae.
      Malesuada nunc vel risus commodo viverra maecenas accumsan. Dictum fusce ut placerat orci nulla
      pellentesque dignissim. Eu lobortis elementum nibh tellus molestie. Purus in massa tempor nec.
      Gravida dictum fusce ut placerat orci nulla. Cras ornare arcu dui vivamus arcu felis bibendum.
      Adipiscing enim eu turpis egestas pretium aenean pharetra. Nunc sed id semper risus in hendrerit
      gravida rutrum. Ultricies mi eget mauris pharetra. Proin nibh nisl condimentum id venenatis a
      condimentum. Congue nisi vitae suscipit tellus mauris a.
    </p>

    <p class="mb-4">
      Posuere urna nec tincidunt praesent semper feugiat nibh sed. Pellentesque nec nam aliquam sem et
      tortor consequat id porta. Consequat ac felis donec et odio pellentesque diam volutpat commodo.
      Est sit amet facilisis magna etiam tempor. Tincidunt dui ut ornare lectus sit. Vulputate mi sit
      amet mauris commodo quis imperdiet massa tincidunt. Ac tincidunt vitae semper quis lectus nulla
      at. Amet massa vitae tortor condimentum. Quam id leo in vitae turpis. Ut porttitor leo a diam.
      Iaculis urna id volutpat lacus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. In
      dictum non consectetur a erat nam at lectus urna. Congue eu consequat ac felis donec et odio
      pellentesque. Et molestie ac feugiat sed lectus vestibulum mattis. Vitae suscipit tellus mauris
      a diam maecenas sed enim. Velit dignissim sodales ut eu sem. Est ultricies integer quis auctor
      elit sed vulputate mi.
    </p>
  </div>
</main>

<aside class="col-span-1">
  <div class="mb-4">
    <SidebarHeading text="Tags" />
    <TagCollection tags={data.tags}/>
  </div>
</aside>
