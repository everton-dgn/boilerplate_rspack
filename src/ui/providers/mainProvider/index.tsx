import { GlobalStyles } from 'ui/globalStyles'
import * as C from 'ui/components'
import { MainProviderProps } from './types'

const MainProvider = ({ children }: MainProviderProps) => (
  <C.ErrorBoundary>
    {children}
    <GlobalStyles />
  </C.ErrorBoundary>
)

export default MainProvider
