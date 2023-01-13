import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Box } from '../../common'
import { ArticlePage } from '../../components/pages/ArticlePage'

export const getServerSideProps: GetServerSideProps = async (params) => {
    const id = params.query.id
    const data = await (
        await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
    ).json()

    return {
        props: {
            article: data,
        },
    }
}

const Article = ({
    article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <Box>
            <ArticlePage
                summary={article.summary}
                imageUrl={article.imageUrl}
                publishedAt={article.publishedAt}
                title={article.title}
            />
        </Box>
    )
}

export default Article
