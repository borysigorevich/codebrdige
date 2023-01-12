import React from 'react';
import {default as MuiSkeleton, SkeletonProps} from '@mui/material/Skeleton'

export const Skeleton = (props: SkeletonProps) => {
    return (
        <MuiSkeleton {...props}/>
    );
};
