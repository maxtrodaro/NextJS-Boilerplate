import NextJS from '../../../assets/svg/nextjs.svg'

import * as S from './styles'

const HomeComponent = ({ title, description }) => (
  <S.Wrapper>
    <S.Logo>
      <NextJS />
    </S.Logo>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default HomeComponent
