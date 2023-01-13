import React from 'react'
import {
    default as MuiCircularProgress,
    CircularProgressProps,
} from '@mui/material/CircularProgress'

export const CircularProgress = (props: CircularProgressProps) => {
    return <MuiCircularProgress {...props} />
}
