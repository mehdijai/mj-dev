const host = "https://mehdijai.com";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Mehdi Jai | VueJS Frontend Developer",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          crossorigin: "",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0",
        },
      ],
    },
  },
  modules: ["nuxt-jsonld"],
  css: ["@/sass/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: false,
          additionalData: `@import "@/sass/vars.scss";`,
        },
      },
    },
  },
});

