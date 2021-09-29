import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['http://localhost:3000']
    },
    proxy: {
      '/api/dictionary': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/juhe/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        dir: resolve(__dirname, '../'),
      }
    }
  }
})
