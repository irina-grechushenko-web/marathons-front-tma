import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@presentation': path.resolve(__dirname, 'src/presentation'),
      '@infrastructure': path.resolve(__dirname, 'src/infrastructure'),
    },
  },
})
