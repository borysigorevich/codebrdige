import {SxProps} from '@mui/material/styles'

export const Wrapper: SxProps = {
    maxWidth: '500px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',

    'a': {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: '800',
        mt: '20px'
    }
}

export const ImageWrapper: SxProps = {
    position: 'relative',
    width: '100%',
    height: '217px',
    'img': {
        objectFit: 'cover'
    }
}

export const CardContent: SxProps = {
    display: 'grid',

    'MuiCardContent-root': {
        p: '25px'
    }
}

export const PublishedAt: SxProps = {
    fontSize: '14px',
    lineHeight: '29px',
    opacity: '0.6',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    mb: '24px'
}

export const Calendar: SxProps = {
    width: '13px',
    height: '13px'
}

export const Title: SxProps = {
    fontSize: '24px',
    mb: '20px'
}