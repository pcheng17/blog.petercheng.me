<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import Title from '$lib/components/Title.svelte';
  import { SITE_URL } from '$lib/config.js';

  let url: string = [SITE_URL, "about"].join("/");
  let title: string = "About me";
  let siteTitle: string = "Peter Cheng | About me";
  let description: string = "A little bit about Peter Cheng";
  let hasMath: boolean = false;
</script>

<Head title={siteTitle} description={description} url={url}/>

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
      University, where we've developed novel software for analyzing the void space of packed particles. Check 
      out our work on <a href="https://www.nature.com/articles/s43588-023-00551-x" class="prose-link" target="_blank">Nature Computational Science</a>!
    </p>
    <p class="my-4">
      I received my PhD in mathematics from UCLA, where I did research in the field of numerical analysis.
      I'm also passionate about teaching and sharing knowledge with those around me, which is the
      inspiration for this website!
    </p>
    <p class="my-4">
      On the topic of academia, I am also an Adjunct Assistant Professor at South Dakota State University in 
      the Department of Mathematics and Statistics. While I don't teach any courses, I do offer my time  
      as an advisor for master's students who would like to work on computational projects broadly
      with my expertise of numerical analysis and physics simulations.
    </p>
    <p class="my-4">
      When I'm not working, I enjoy dabbling in various projects:
    </p>
    <ul class="list-disc list-outside pl-[26px] mt-5 marker:text-[#d1d5db]">
      <li class="prose-list">
        I love to tinker with code, so I tend to spend time on random little projects that catch my
        attention. It's hard to really describe the scope of these projects...
      </li>
      <li class="prose-list">
        This website, which serves two purposes: (1) it encourages me to document things I've learned to
        more easily share with others, and (2) it has allowed me to learn some basic frontend and backend
        skills via 
        <a href="https://kit.svelte.dev/" class="prose-link" target="_blank">SvelteKit</a>.  
      </li>
      <li class="prose-list">
        I try and keep up with my Korean studies as much as I can. I started learning when the pandemic
        hit because of my interest in both the country and the language, and I've been studying ever
        since. Sadly, I'm still far from fluent...
      </li>
    </ul>
  </article>
</main>
