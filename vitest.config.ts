import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        exclude: [
          'src/testHelpers/',
          'src/ui/theme',
          'src/ui/globalStyles',
          'src/**/__tests__'
        ],
        provider: 'c8'
      },
      environment: 'happy-dom',
      globals: true,
      passWithNoTests: true,
      setupFiles: ['./.test/setup.ts']
    }
  })
)
