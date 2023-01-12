import React, {forwardRef} from 'react';
import {default as MuiTypography, TypographyProps} from '@mui/material/Typography'

export const Typography = forwardRef<HTMLElement, TypographyProps>(({children, ...rest}, ref) => {
    return (
        <MuiTypography ref={ref} {...rest}>
            {children}
        </MuiTypography>
    );
})