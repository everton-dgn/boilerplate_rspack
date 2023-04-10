import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/',
  root: 'src',
  build: {
    sourcemap: true
  },
  plugins: [tsconfigPaths(), react(), svgr()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./.test/setup.ts'],
    coverage: {
      provider: 'istanbul',
      exclude: ['src/testHelpers/', 'src/ui/components/templates/index.tsx']
    }
  }
})
