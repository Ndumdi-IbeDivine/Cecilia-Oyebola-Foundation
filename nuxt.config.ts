import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    app: {
        head: {
            titleTemplate: "%s - Cecylia Oyebola Foundation",
            // meta: [
            //     {
            //         name: "viewport",
            //         content: "width=device-width, initial-scale=1",
            //     },
            //     { name: "robots", content: "index, follow" },
            // ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://vjs.zencdn.net/8.22.0/video-js.css",
                },
                {
                    rel: "stylesheet",
                    href: "https://unpkg.com/@videojs/themes@1/dist/city/index.css",
                },
                { rel: 'icon', type: 'image/x-icon', href: '/images/cecy-foundation-logo.png' },
            ],
            script: [
                {
                    src: "https://vjs.zencdn.net/8.22.0/video.min.js",
                    defer: true,
                },
            ],
            htmlAttrs: {
                lang: "en",
                dir: "ltr",
            },
        },
    },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
});
