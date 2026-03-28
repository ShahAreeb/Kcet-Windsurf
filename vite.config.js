import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three'
            }
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'ui'
            }
            return 'vendor'
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
})
