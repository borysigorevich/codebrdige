import { SxProps } from '@mui/material/styles'

export const Wrapper: SxProps = {}

export const Typography: SxProps = {
    fontWeight: '600',
    pb: '5px',
    mb: '45px',
    borderBottom: '1px solid #d2d1d1',
}

export const ArticlesItemWrapper: SxProps = {
    display: 'grid',
    gridTemplateColumns: {
        xs: '1fr',
        md: 'repeat(auto-fill, minmax(400px, 1fr))',
    },
    gap: '45px',
    justifyItems: 'center',
}
