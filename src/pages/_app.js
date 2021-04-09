import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../themes/global'
import theme from '../themes/default'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
