import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/',
  plugins: [tsconfigPaths(), react(), svgr()],
  test: {
    coverage: {
      exclude: [
        'src/testHelpers/',
        'src/ui/theme',
        'src/ui/globalStyles',
        'src/**/__tests__'
      ]
    },
    environment: 'happy-dom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts']
  }
})
