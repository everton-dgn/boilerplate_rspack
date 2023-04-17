/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/',
  plugins: [tsconfigPaths(), react(), svgr()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./.test/setup.ts'],
    passWithNoTests: true,
    coverage: {
      provider: 'c8',
      exclude: [
        'src/testHelpers/',
        'src/ui/theme',
        'src/ui/globalStyles',
        'src/**/__tests__'
      ]
    }
  }
})
