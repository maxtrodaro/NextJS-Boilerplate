import Link from 'next/link'

import NextJS from '../../../assets/svg/nextjs.svg'

import * as S from './styles'

const BackOfficeComponent = ({ title, description, buttonText }) => (
  <S.Wrapper>
    <S.Logo>
      <NextJS />
    </S.Logo>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Link href="/">
      <S.Button>{buttonText}</S.Button>
    </Link>
  </S.Wrapper>
)

export default BackOfficeComponent
