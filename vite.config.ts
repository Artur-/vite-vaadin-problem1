import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'frontend',
  build: {
    lib: {
      entry: 'index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit-element/
    }
  }
})
