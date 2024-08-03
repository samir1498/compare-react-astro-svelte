// apps/todo-app-sveltkit/vite.config.ts
import { defineConfig } from "file:///Users/samir/Developer/personal/monthly/compare-react-astro-svelte/node_modules/.pnpm/vite@5.3.5_@types+node@18.16.9/node_modules/vite/dist/node/index.js";
import { sveltekit } from "file:///Users/samir/Developer/personal/monthly/compare-react-astro-svelte/node_modules/.pnpm/@sveltejs+kit@1.30.4_svelte@4.2.18_vite@5.3.5/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { nxViteTsPaths } from "file:///Users/samir/Developer/personal/monthly/compare-react-astro-svelte/node_modules/.pnpm/@nx+vite@19.5.6_@swc-node+register@1.9.2_@swc+core@1.5.29_@types+node@18.16.9_nx@19.5.6_types_p5zg7zkyih3phveq2qhm4ei3u4/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var __vite_injected_original_dirname = "/Users/samir/Developer/personal/monthly/compare-react-astro-svelte/apps/todo-app-sveltkit";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/apps/todo-app-sveltkit",
  server: {
    port: 4200,
    host: "localhost"
  },
  preview: {
    port: 4300,
    host: "localhost"
  },
  plugins: [sveltekit(), nxViteTsPaths()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: "../../dist/apps/todo-app-sveltkit",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy90b2RvLWFwcC1zdmVsdGtpdC92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zYW1pci9EZXZlbG9wZXIvcGVyc29uYWwvbW9udGhseS9jb21wYXJlLXJlYWN0LWFzdHJvLXN2ZWx0ZS9hcHBzL3RvZG8tYXBwLXN2ZWx0a2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2FtaXIvRGV2ZWxvcGVyL3BlcnNvbmFsL21vbnRobHkvY29tcGFyZS1yZWFjdC1hc3Ryby1zdmVsdGUvYXBwcy90b2RvLWFwcC1zdmVsdGtpdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2FtaXIvRGV2ZWxvcGVyL3BlcnNvbmFsL21vbnRobHkvY29tcGFyZS1yZWFjdC1hc3Ryby1zdmVsdGUvYXBwcy90b2RvLWFwcC1zdmVsdGtpdC92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPSd2aXRlc3QnIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBfX2Rpcm5hbWUsXG4gIGNhY2hlRGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlL2FwcHMvdG9kby1hcHAtc3ZlbHRraXQnLFxuXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDQyMDAsXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIH0sXG5cbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDQzMDAsXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIH0sXG5cbiAgcGx1Z2luczogW3N2ZWx0ZWtpdCgpLCBueFZpdGVUc1BhdGhzKCldLFxuXG4gIC8vIFVuY29tbWVudCB0aGlzIGlmIHlvdSBhcmUgdXNpbmcgd29ya2Vycy5cbiAgLy8gd29ya2VyOiB7XG4gIC8vICBwbHVnaW5zOiBbIG54Vml0ZVRzUGF0aHMoKSBdLFxuICAvLyB9LFxuXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi4vLi4vZGlzdC9hcHBzL3RvZG8tYXBwLXN2ZWx0a2l0JyxcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLHFCQUFxQjtBQUg5QixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFFVixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUVBLFNBQVMsQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU90QyxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixzQkFBc0I7QUFBQSxJQUN0QixpQkFBaUI7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
