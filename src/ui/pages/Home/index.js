import Head from 'next/head'
import HomeComponent from '../../components/HomeComponent'
import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <Head>
        <title>Backoffice - Home</title>
        <meta
          name="description"
          content="A backoffice Home"
        />
      </Head>
      <HomeComponent
        title="Bem vindo ao Backoffice - Fidelização "
        description="Este é um boilerplate para nosso novo projeto de Fidelização!"
      />
    </S.Wrapper>
  )
}

export default Home
