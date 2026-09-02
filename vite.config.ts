// @lovable.dev/vite-tanstack-config já inclui os plugins básicos.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { 
      entry: "server",
      preset: "vercel" // 🔥 Força a compilação no formato nativo da Vercel
    },
  },
});