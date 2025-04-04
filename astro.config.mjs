import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://evilweasel.github.io",
  base: "/docs",
  devToolbar: {
    enabled: true,
  },
  vite: {
    define: {
      "process.env": {},
    },
  },
  integrations: [
    react(),
    starlight({
      title: "Unterrichtsmarterial",
      description:
        "Guides, Ressourcen und Referenzen rund um Anwendungsentwicklung, Systemintegration und andere IT-Themen.",
      defaultLocale: "de",
      favicon: "/favicon.svg",
      editLink: {
        baseUrl: "https://github.com/evilweasel/docs/edit/main",
      },
      logo: {
        dark: "./src/assets/dark--line-md--cloud-braces-loop.svg",
        light: "./src/assets/light--line-md--cloud-braces-loop.svg",
      },
      customCss: ["./src/styles/global.css", "./src/fonts/font-face.css"],
      components: {
        Head: "./src/components/Head.astro",
      },
      sidebar: [
        {
          label: "Start",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Startseite",
              link: "/",
            },
            {
              label: "Mithelfen",
              link: "/start/contribution",
            },
            {
              label: "Style-Guide",
              link: "/start/style-guide",
            },
          ],
        },
        // Each subfolder inside /src/docs can be autogenerated like this.
        // Ignore individual files by prefixing them with an underscore.
        {
          label: "Zertifikate",
          autogenerate: { directory: "zertifikate" },
          badge: "New",
        },
        {
          label: "UML",
          autogenerate: { directory: "uml" },
          collapsed: true,
        },
        {
          label: "Git",
          autogenerate: { directory: "git" },
          collapsed: true,
        },
        {
          label: "Dev-Setup",
          autogenerate: { directory: "devsetup" },
        },
        {
          label: "Linux",
          autogenerate: { directory: "linux" },
          badge: "New",
          collapsed: true,
        },
        {
          label: "Powershell",
          autogenerate: { directory: "powershell" },
          badge: "New",
          collapsed: true,
        },
        {
          label: "Astro",
          autogenerate: { directory: "astro" },
          collapsed: true,
        },
        {
          label: "C#",
          autogenerate: { directory: "csharp" },
          collapsed: true,
        },
        {
          label: "Webentwicklung",
          autogenerate: { directory: "webentwicklung" },
        },
      ],
      expressiveCode: {
        plugins: [pluginLineNumbers()],
      },
    }),
  ],
});
