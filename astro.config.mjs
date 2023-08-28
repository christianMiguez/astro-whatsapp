import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercelServerless from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-whatsapp.vercel.app/",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: vercelServerless(),
});
