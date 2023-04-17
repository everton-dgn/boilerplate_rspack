import { useState } from 'react'
import { useSetPageTitle } from 'hooks'
import * as C from 'ui/components'
import * as S from './styles'
import { ReactComponent as LogoReact } from 'ui/assets/images/logoReact.svg'
import LogoRsPack from 'ui/assets/images/logoRspack.webp'

const Home = () => {
  const [count, setCount] = useState(0)
  useSetPageTitle({ pageTitle: 'Boilerplate React' })

  return (
    <S.Container>
      <S.WrapperImages>
        <img src={LogoRsPack} alt="Logo Rspack" />
        <LogoReact role="img" title="Logo React" />
      </S.WrapperImages>
      <S.Title>Rspack + React</S.Title>
      <C.Button
        text={`COUNT: ${count}`}
        aria-label={`COUNT: ${count}`}
        onClick={() => setCount(prevState => prevState + 1)}
      />
    </S.Container>
  )
}

export default Home
