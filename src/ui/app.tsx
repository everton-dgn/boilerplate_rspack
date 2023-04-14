import { BrowserRouter } from 'react-router-dom'
import Routes from 'main/routes'
import { MainProvider } from 'ui/providers'

const App = () => (
  <MainProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MainProvider>
)

export default App
