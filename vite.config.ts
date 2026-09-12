import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
    resolve: { tsconfigPaths: true },
    server: {
        allowedHosts: ["beshel.dev"],
    },
    plugins: [
        devtools(),
        tailwindcss(),
        tanstackStart(),
        nitro({
            preset: "cloudflare-module",
            compatibilityDate: "2024-09-19",
            cloudflare: {
                deployConfig: true,
                nodeCompat: true,
            },
        }),
        viteReact(),
    ],
});

export default config;
