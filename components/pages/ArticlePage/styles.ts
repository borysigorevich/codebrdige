import {SxProps} from '@mui/material/styles'

export const Wrapper: SxProps = {
    'a': {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: '800',
        mt: '20px',
        pl: '150px'
    }
}

export const ImageWrapper: SxProps = {
    position: 'relative',
    width: '100%',
    height: '245px',

    'img': {
        objectFit: 'cover'
    }
}

export const ContentWrapper: SxProps = {
    position: 'relative',
    mt: '-90px',
    width: 'calc(100% - 150px)',
    p: '35px 75px 50px',
    mx: 'auto',
    bgcolor: '#fff',
    borderRadius: '5px',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
}

export const Title: SxProps = {
    fontSize: '24px',
    lineHeight: '29px',
    textAlign: 'center',
    mb: '50px',
}

export const Summary: SxProps = {
    fontSize: '18px',
    color: '#000'
}