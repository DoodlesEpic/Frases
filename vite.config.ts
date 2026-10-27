import { defineConfig } from "vite";

// Usa o CSS pré-compilado do Bootstrap em vez de Sass para reduzir o tempo de
// build, eliminar avisos de deprecação e simplificar o projeto com variáveis CSS
export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: "esnext",
  },
  server: {
    port: 8080,
  },
});
