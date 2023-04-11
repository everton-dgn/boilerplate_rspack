import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/',
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./.test/setup.ts'],
    passWithNoTests: true,
    coverage: {
      provider: 'c8',
      exclude: ['src/testHelpers/']
    }
  }
})
