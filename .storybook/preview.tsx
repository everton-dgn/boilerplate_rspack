import { MainProviders } from '../src/ui/providers'

export const decorators = [
  (Story: any) => (
    <MainProviders>
      <Story />
    </MainProviders>
  )
]
