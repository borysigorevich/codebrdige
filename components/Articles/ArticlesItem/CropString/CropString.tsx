import React from 'react';
import parse from 'html-react-parser'

type CropString = {
    text: string
}

export const CropString = ({text}: CropString) => {

    let matchCount = 0
    text.replace(/<mark>/gi, () => {
        matchCount++
        return ''
    })

    const lengthToCrop = 100 + (matchCount * 10)

    const croppedString = text.length > lengthToCrop
        ? text.substring(0, lengthToCrop - 3) + '...'
        : text

    return (
        <>
            {text && parse(croppedString)}
        </>
    );
};