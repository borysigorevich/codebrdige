import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'

import '@fontsource/montserrat'

import { store } from '../store/store'
import { theme } from '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}
