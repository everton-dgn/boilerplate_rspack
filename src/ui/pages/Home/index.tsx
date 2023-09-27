import { useState } from 'react'
import useSetPageTitle from 'hooks/useSetPageTitle'
import Button from 'ui/components/atoms/Button'
import * as S from './styles'
import { ReactComponent as LogoReact } from 'ui/assets/images/logoReact.svg'
import LogoRsPack from 'ui/assets/images/logoRspack.webp'

const Home = () => {
  const [count, setCount] = useState(0)
  useSetPageTitle({ pageTitle: 'Boilerplate React' })

  return (
    <S.Container>
      <S.WrapperImages>
        <img alt="Logo Rspack" src={LogoRsPack} />
        <LogoReact role="img" title="Logo React" />
      </S.WrapperImages>
      <S.Title>Rspack + React</S.Title>
      <Button
        aria-label={`COUNT: ${count}`}
        onClick={() => {
          setCount(prevState => prevState + 1)
        }}
        text={`COUNT: ${count}`}
      />
    </S.Container>
  )
}

export default Home
