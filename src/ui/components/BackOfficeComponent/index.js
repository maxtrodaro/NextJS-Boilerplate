import LogoSVG from '../../../assets/svg/LogoSVG'
import * as S from './styles'

const BackOfficeComponent = ({ title, description }) => (
  <S.Wrapper>
    <S.Logo>
      <LogoSVG />
    </S.Logo>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default BackOfficeComponent
