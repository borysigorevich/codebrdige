import React, {memo} from 'react';
import {Box, Typography} from "../../common";

import * as styles from './styles'
import {ArticleType} from "../../store/articleService";
import {ArticlesItemSkeleton} from "./ArticlesItemSkeleton";
import {ArticlesItem} from "./ArticlesItem";

type ArticlesType = {
    data: ArticleType[] | undefined
    isLoading: boolean
    isFetching: boolean
}

export const Articles = memo(({data, isLoading, isFetching}: ArticlesType) => {

    return (
        <Box sx={styles.Wrapper}>
            <Typography sx={styles.Typography}>
                Results: {data?.length}
            </Typography>

            <Box sx={styles.ArticlesItemWrapper}>
                {
                    isLoading || isFetching
                        ? <ArticlesItemSkeleton/>
                        : (data!.map(article => (
                                <ArticlesItem
                                    key={article.id}
                                    imageUrl={article.imageUrl}
                                    title={article.title}
                                    summary={article.summary}
                                    publishedAt={article.publishedAt}
                                    id={article.id}
                                />
                            ))
                        )
                }
            </Box>

        </Box>
    );
})