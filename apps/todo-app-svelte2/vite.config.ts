import { defineConfig } from 'vite';
// Add this to your imports
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    //... other plugins
    svelte(), // Add this line
  ],
  //...
  server: {
    port: 4200,
    host: 'localhost',
  },
});
