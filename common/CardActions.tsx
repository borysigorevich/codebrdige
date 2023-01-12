import React from 'react';
import {default as MuiCardActions, CardActionsProps} from '@mui/material/CardActions'

export const CardActions = ({children, ...rest}: CardActionsProps) => {
    return (
        <MuiCardActions {...rest}>
            {children}
        </MuiCardActions>
    );
};