import { SxProps } from '@mui/material/styles'

export const Wrapper: SxProps = {
    mb: '40px',
}

export const Typography: SxProps = {
    fontWeight: '700',
    lineHeight: '20px',
    fontSize: '16px',
    mb: '10px',
}

export const InputWrapper: SxProps = {
    position: 'relative',
}

export const Search: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translateY(-50%)',
}

export const Input: SxProps = {
    width: '100%',
    maxWidth: '650px',

    input: {
        pl: '60px',
        height: '100%',
        maxHeight: '50px',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        color: '#575757',
    },

    fieldset: {
        borderColor: '#d2d1d1',
    },
}
