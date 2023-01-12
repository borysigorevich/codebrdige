import React from 'react';
import {default as MuiTextField, TextFieldProps} from '@mui/material/TextField'

export const TextField = (props: TextFieldProps) => {
    return (
        <MuiTextField {...props}/>
    );
};