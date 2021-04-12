import Head from 'next/head'
import BackOfficeComponent from '../../components/BackOfficeComponent'
import * as S from './styles'

const BackOffice = () => {
  return (
    <S.Wrapper>
      <Head>
        <title>Backoffice - Redirect</title>
        <meta
          name="description"
          content="A backoffice Page"
        />
      </Head>
      <BackOfficeComponent
        title="Bem vindo ao redirect Backoffice - Fidelização"
        description="Este é um teste de redirect do novo projeto de Fidelização!"
        buttonText="Voltar para a home"
      />
    </S.Wrapper>
  )
}

export default BackOffice
