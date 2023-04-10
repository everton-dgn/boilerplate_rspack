import { defineConfig } from 'vitest/config'

export default defineConfig({
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
