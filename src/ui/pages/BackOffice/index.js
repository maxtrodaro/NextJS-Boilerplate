import Head from 'next/head'
import BackOfficeComponent from '../../components/BackOfficeComponent'
import * as S from './styles'

const BackOffice = () => {
  return (
    <S.Wrapper>
      <Head>
        <title>Backoffice - Test</title>
        <meta
          name="description"
          content="A backoffice Page"
        />
      </Head>
      <BackOfficeComponent
        title="Next.js Pro - Godoy"
        description="A ready to production Next.js boilerplate"
      />
    </S.Wrapper>
  )
}

export default BackOffice
