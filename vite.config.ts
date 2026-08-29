import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Keep the custom SSR error wrapper as the server entry point.
      server: { entry: "server" },
    }),
    // Nitro emits Vercel's Build Output API structure under .vercel/output.
    ...(command === "build" ? nitro({ preset: "vercel" }) : []),
    viteReact(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
}));
