import React from 'react'
import { default as MuiBox, BoxProps } from '@mui/material/Box'

export const Box = ({ children, ...rest }: BoxProps) => {
    return <MuiBox {...rest}>{children}</MuiBox>
}
