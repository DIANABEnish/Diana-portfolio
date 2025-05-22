import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false // מונע הודעות שגיאה צפות בדפדפן (אופציונלי)
    },
    watch: {
      usePolling: true // חשוב לסביבות WSL/Windows
    }
  }
})