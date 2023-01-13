import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type ArticleType = {
    id?: number
    title: string
    imageUrl: string
    summary: string
    publishedAt?: string
}

export const articleApi = createApi({
    reducerPath: 'article',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spaceflightnewsapi.net/v3/articles',
    }),
    endpoints: (build) => ({
        getArticles: build.query<ArticleType[], string>({
            query: () => ({
                url: '',
            }),
        }),
    }),
})

export const { useGetArticlesQuery } = articleApi
