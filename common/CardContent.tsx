import React from 'react'
import {
    default as MuiCardContent,
    CardContentProps,
} from '@mui/material/CardContent'

export const CardContent = ({ children, ...rest }: CardContentProps) => {
    return <MuiCardContent {...rest}>{children}</MuiCardContent>
}
