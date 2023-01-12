import React, {memo} from 'react';
import dateFormat from 'dateformat'
import Image from 'next/image'
import Link from 'next/link'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import {Card, Box, CardContent, Typography} from "../../../common";

import * as styles from './styles'
import {imgLoader} from "../../../utils";
import {ArticleType} from "../../../store/articleService";
import {CropString} from "./CropString";

type ArticlesItemProps = ArticleType

export const ArticlesItem = memo(({title, publishedAt, summary, imageUrl, id}: ArticlesItemProps) => {

    const date = new Date(publishedAt!)

    return (
        <Card sx={styles.Wrapper}>
            <Box sx={styles.ImageWrapper}>
                <Image
                    loader={imgLoader}
                    src={imageUrl}
                    alt={title}
                    fill
                />
            </Box>
            <CardContent sx={styles.CardContent}>
                <Typography sx={styles.PublishedAt}>
                    <CalendarTodayOutlinedIcon sx={styles.Calendar}/>
                    {dateFormat(date, 'mmmm dS, yyyy')}
                </Typography>

                <Typography variant='h2' sx={styles.Title}>
                    <CropString text={title}/>
                </Typography>

                <Typography>
                    <CropString text={summary}/>
                </Typography>

                <Link href={`/article/${id}`}>
                    Read more
                    <ArrowRightAltOutlinedIcon/>
                </Link>
            </CardContent>
        </Card>
    );
})