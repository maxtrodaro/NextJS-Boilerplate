import styled from 'styled-components'

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const Logo = styled.div`
  color: white;

  svg {
    fill: white;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 54px;
  margin: 40px 0 20px;
`

export const Description = styled.h2`
  font-size: 24px;
  line-height: 32px;
`
