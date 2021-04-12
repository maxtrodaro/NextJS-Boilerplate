import styled from 'styled-components'

import theme from '../../../themes/default/index'

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const Logo = styled.div`
  color: ${theme.colors.white};

  svg {
    fill: ${theme.colors.white};
  }
`

export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 54px;
  margin: 40px 0 20px;
`

export const Description = styled.h2`
  color: ${theme.colors.white};
  font-size: 24px;
  line-height: 32px;
`

export const Button = styled.button`
  background: ${theme.colors.white};
  border-radius: 6px;
  color: ${theme.colors.black};
  cursor: pointer;
  font-size: 24px;
  line-height: 32px;
  margin-top: 20px;
  outline: none;
  padding: 10px 30px;
`
