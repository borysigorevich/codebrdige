import React from 'react';
import Image from "next/image";
import Link from 'next/link'

import WestIcon from '@mui/icons-material/West';

import {Box, Typography} from "../../../common";
import {imgLoader} from "../../../utils";
import {ArticleType} from "../../../store/articleService";

import * as styles from './styles'

export const ArticlePage = ({imageUrl, summary, title}: ArticleType) => {
    return (
        <Box sx={styles.Wrapper}>
            <Box sx={styles.ImageWrapper}>
                <Image
                    loader={imgLoader}
                    src={imageUrl}
                    fill
                    alt={title}
                />
            </Box>
            <Box sx={styles.ContentWrapper}>
                <Typography sx={styles.Title} variant='h2'>{title}</Typography>
                <Typography sx={styles.Summary}>{summary}</Typography>
            </Box>
            <Link href='/'>
                <WestIcon/>
                Back to homepage
            </Link>
        </Box>
    );
};