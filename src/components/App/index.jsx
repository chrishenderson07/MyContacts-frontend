import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'

import { Header } from '../Header'

import { Container } from './styles'

import { Router } from '../../routes'

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Container>
					<Header />
					<Router />
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
