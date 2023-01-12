import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import {Box, TextField, Typography} from '../../common'

import * as styles from './styles'

type FilterType = {
    searchString: string
    setSearchString: Dispatch<SetStateAction<string>>
}

export const Filter = ({searchString, setSearchString}: FilterType) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value)
    }

    return (
        <Box sx={styles.Wrapper}>
            <Typography variant='h1' sx={styles.Typography}>Filter By Keywords</Typography>
            <Box sx={styles.InputWrapper}>
                <SearchRoundedIcon sx={styles.Search}/>
                <TextField
                    sx={styles.Input}
                    value={searchString}
                    onChange={handleInputChange}
                />
            </Box>
        </Box>
    );
};