import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      // Specify the entry point for the main process
      entry: resolve(__dirname, 'src/main/index.js'),
      // Output directory
      outDir: resolve(__dirname, 'dist/main')
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      // Specify the entry point for the preload script
      entry: resolve(__dirname, 'src/preload/index.js'),
      // Output directory
      outDir: resolve(__dirname, 'dist/preload')
    }
  },
  renderer: {
    plugins: [svelte()],
    // Default public directory, used if you don't customize it
    publicDir: 'public', // or simply omit this line
    build: {
      entry: resolve(__dirname, 'src/renderer/main.js'),
      outDir: resolve(__dirname, 'dist/renderer')
    }
  }
  // base: '/', // Use '/' for root deployment or adjust if deploying to a subdirectory
})
