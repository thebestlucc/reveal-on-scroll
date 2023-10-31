import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function transformHtml() {
  return {
    name: "change assets path",
    transformIndexHtml(html) {
      return html.replaceAll("/assets", "/reveal-on-scroll/assets");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), transformHtml()],
});
