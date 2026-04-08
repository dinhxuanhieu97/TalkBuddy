import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      events: '/src/shims/events.ts'
    }
  },
  optimizeDeps: {
    include: ['expo-modules-core', 'events']
  },
  build: {
    rollupOptions: {
      moduleTypes: { '.js': 'jsx' }
    }
  }
})

// Patched to pre-bundle expo-modules-core and events to avoid "Importing binding name 'EventEmitter' is not found" in WebView/Vite dev.

