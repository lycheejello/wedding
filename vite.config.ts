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
      'vnsrc': path.resolve(__dirname, 'vn/src'),
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vn: resolve(__dirname, 'vn', 'index.html'),
        maps: resolve(__dirname, 'vn', 'maps', 'index.html'),
        questions: resolve(__dirname, 'vn', 'questions', 'index.html'),
        rsvp: resolve(__dirname, 'vn', 'rsvp', 'index.html'),
      },
    },
  },

})


