import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // forces Vite to detect file changes in WSL/Windows
      interval: 100      // check every 100ms (optional, can be higher to reduce CPU usage)
    }
  }
})
