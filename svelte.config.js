import adapter from "@sveltejs/adapter-auto";
// import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex, escapeSvelte } from "mdsvex";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";
import shiki from "shiki";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatexSvelte],
      highlight: {
        highlighter: async (code, lang = "text") => {
          const highlighter = await shiki.getHighlighter({
            theme: "min-light",
          });
          const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
          return `{@html \`${html}\` }`;
        },
      },
      extensions: [".md"],
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },

  extensions: [".svelte", ".md"],
};

export default config;
