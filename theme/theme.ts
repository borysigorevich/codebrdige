import { createTheme } from '@mui/material/styles'

export let theme = createTheme({})

theme = {
    ...theme,
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: '"Montserrat", sans-serif',
                },
            },
        },
    },
}
