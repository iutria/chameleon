import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(
  {
    plugins: [react()],
    base: '/chameleon/',
    server: {
      proxy:{
        '/api': {
          target: 'https://pixabay.com',
          changeOrigin: true
        }
      }
    }
  }
)
