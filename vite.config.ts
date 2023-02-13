import * as path from "path";

export default {
  root: "src",
  build: {
    outDir: "../dist",
    target: "esnext",
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
};
