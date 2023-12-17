<script lang="ts">
  import Katex from '$lib/components/Katex.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Title from '$lib/components/Title.svelte';
  import { siteUrl } from '$lib/config.js';

  let url: string = [siteUrl, "about"].join("/");
  let title: string = "About me";
  let description: string = "A little bit about Peter Cheng";
  let hasMath: boolean = false;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href={url} />
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={url} />

  <Katex {hasMath} />
</svelte:head>

<main>
  <article>
    <img src="/images/me.jpeg" alt="Peter Cheng" class="float-left mr-6 my-3 aspect-square rounded-full w-40 h-40 border-2 border-gray-500"/>
    <Title {title} />
    <p class="my-4">
      Hey there! My name is Peter Cheng, a mathematician and software engineer. I currently work at 
      <a href="https://roblox.com" class="prose-link" target="_blank">Roblox</a> 
      on the physics engine team. In a nutshell, we make sure physics works as expected across the
      platform. Previously, I worked at
      <a href="https://dreamworks.com" class="prose-link" target="_blank">DreamWorks</a>
      on the FX/CFX production software team, with a focus on the proprietary fire/gas and hair
      simulation engines. You can find my name in the credits of all the DreamWorks' films between
      2019 and 2022!
    </p>
    <p class="my-4">
      I founded Ninjabyte Computing in 2019 to provide software, computational, and simulation consulting 
      services to academic research groups. I currently work part-time with the
      <a href="https://seguralab.duke.edu/" class="prose-link" target="_blank">Segura Lab</a> at Duke 
      University, where we are developing software for analyzing the void space of packed particles. Check 
      out our work on <a href="https://www.nature.com/articles/s43588-023-00551-x" class="prose-link" target="_blank">Nature Computational Science</a>!
    </p>
    <p class="my-4">
      I received my PhD in mathematics from UCLA, where I did research in the field of numerical analysis.
      I'm also passionate about teaching and sharing knowledge with those around me, which is the
      inspiration for this website!
    </p>
    <p class="my-4">
      When I'm not working, I enjoy dabbling in various projects:
    </p>
    <ul class="list-disc list-outside pl-[26px] mt-5 marker:text-[#d1d5db]">
      <li class="prose-list">
        I'm very interested in this AI revolution that we're experiencing with GPT and related
        technologies, so I often spend my time building small apps that allow me to experiment with
        GPT. I would love to hear about the ideas you have!  
      </li>
      <li class="prose-list">
        This website, which serves two purposes: (1) it encourages me to document things I've learned to
        more easily share with others, and (2) it has allowed me to learn some basic frontend and backend
        skills via 
        <a href="https://kit.svelte.dev/" class="prose-link" target="_blank">SvelteKit</a>.  
      </li>
      <li class="prose-list">
        I also try and keep up with my Korean studies as much as I can.
      </li>
    </ul>
  </article>
</main>
