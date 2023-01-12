import {useState, useEffect} from 'react'
import {ArticleType} from "../store/articleService";
import {useDebounce} from "./useDebounce";

export const useFilter = (articles: ArticleType[] | undefined) => {
    const [searchString, setSearchString] = useState('')
    const [filteredArticles, setFilteredArticles] = useState<ArticleType[]>([])

    useEffect(() => {
        articles && setFilteredArticles(articles)
    }, [articles])


    const handleFilterArticles = () => {
        const textToSearch = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        const textArray = textToSearch.trim().split(' ')

        let resultTextToSearch = []
        if (textArray.length === 1) resultTextToSearch.push(textArray[0])
        else {
            for (let i = 0; i < textArray.length; i++) {
                resultTextToSearch.push(textArray[i])
                for (let j = i; j < textArray.length - 1; j++) {
                    resultTextToSearch.push(resultTextToSearch.at(-1) + ' ' + textArray[j + 1])
                }
            }
        }

        let pattern = new RegExp(`${resultTextToSearch.reverse().join('|')}`, 'gi')

        if (articles && searchString) {
            const mappedArticles = articles.map((article) => {
                let titleMatches = 0
                let summaryMatches = 0

                const newTitle = article.title.replace(pattern, match => {
                    titleMatches++
                    return `<mark>${match}</mark>`
                })

                const newSummary = article.summary.replace(pattern, match => {
                    summaryMatches++
                    return `<mark>${match}</mark>`
                })

                return titleMatches >= summaryMatches
                    ? {
                        ...article,
                        title: newTitle,
                    }
                    : {
                        ...article,
                        summary: newSummary
                    }
            })

            const filteredArticles = mappedArticles.filter(article => {
                return article.title.includes('mark') || article.summary.includes('mark')
            })

            return setFilteredArticles(filteredArticles)
        }

        articles && setFilteredArticles(articles)
    }

    useDebounce(handleFilterArticles, [searchString], 500)

    return {
        searchString,
        setSearchString,
        filteredArticles
    }

}