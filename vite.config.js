import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for ConstructTrack public website
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
