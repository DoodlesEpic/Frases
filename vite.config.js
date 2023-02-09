import path from "path";
import htmlPurge from "vite-plugin-purgecss";

export default {
  root: "src",
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [htmlPurge()],
};
