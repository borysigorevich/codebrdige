import React from 'react'
import { Box } from '../../../common'
import { Filter } from '../../Filter'

import * as styles from './styles'
import { Articles } from '../../Articles'
import { useGetArticlesQuery } from '../../../store/articleService'
import { useFilter } from '../../../hooks'

export const HomePage = () => {
    const { data, isLoading, isFetching } = useGetArticlesQuery('')

    const { filteredArticles, setSearchString, searchString } = useFilter(data)

    return (
        <Box sx={styles.Wrapper}>
            <Filter
                searchString={searchString}
                setSearchString={setSearchString}
            />
            <Articles
                data={filteredArticles}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </Box>
    )
}
