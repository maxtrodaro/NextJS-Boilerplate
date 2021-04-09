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
        title="Next.js - Boilerplate"
        description="A ready to production Next.js boilerplate"
      />
    </S.Wrapper>
  )
}

export default Home
