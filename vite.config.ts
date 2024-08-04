import path from 'path'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        maps: resolve(__dirname, 'maps', 'index.html'),
        questions: resolve(__dirname, 'questions', 'index.html'),
        rsvp: resolve(__dirname, 'rsvp', 'index.html'),
      },
    },
  },

})


