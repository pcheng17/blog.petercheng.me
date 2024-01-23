// Include the following if you want your site to be static
// export const prerender = true;

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"

inject({ mode: dev ? 'development' : 'produdction' });
injectSpeedInsights();
