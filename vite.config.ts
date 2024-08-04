import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'rsvp': path.resolve(__dirname, 'src', 'rsvp'),
    },
  }

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rsvp: resolve(__dirname, 'src', 'rsvp', 'index.html'),
      },
    },
  },

})


