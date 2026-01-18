import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://docs.neuracraft.my.id",
  base: "/",
  markdown: {
    syntaxHighlight: "shiki"
  },
  output: "static"
});
