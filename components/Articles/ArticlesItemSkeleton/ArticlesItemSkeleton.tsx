import React from 'react';
import {Skeleton} from "../../../common";

export const ArticlesItemSkeleton = () => {
    const skeletonItems = new Array(6).fill(0).map(() => Skeleton)

    return (
        <>
                {skeletonItems.map((Skeleton, index) => (
                        <Skeleton
                            key={index}
                            sx={{borderRadius: '5px', maxWidth: '500px'}}
                            variant="rectangular"
                            width={'100%'}
                            height={530}
                        />
                    )
                )}
        </>
    );
};