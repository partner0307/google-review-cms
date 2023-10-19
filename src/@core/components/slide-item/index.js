import { Avatar, Box, Rating, Typography } from '@mui/material';
import React from 'react';

const SlideItem = () => {
    return (
        <Box
            component={'div'}
            display={'flex'}
            flexDirection={'column'}
            gap={'0.5rem'}
            padding={'1rem'}
            borderRadius={'0.25rem'}
            overflow={'auto'}
            backgroundColor={'#fff'}
        >
            <Box
                component={'div'}
                display={'flex'}
                alignItems={'center'}
                gap={'0.5rem'}
                width={'100%'}
            >
                <Avatar src='../images/avatars/1.png' alt='avatar' />
                <Box
                    component={'div'}
                    display={'flex'}
                    gap={'0.25rem'}
                    flexDirection={'column'}
                >
                    <Typography variant='body1' component={'p'}>Brendan Andrade</Typography>
                    <Typography variant='body2' component={'p'}>Founder of Bright Bits</Typography>
                </Box>
            </Box>
            <Box
                component={'div'}
                display={'flex'}
            >
                <Rating value={5} readOnly />
            </Box>
            <Box
                component={'div'}
            >
                <Typography variant='body1'>
                    I dragged my feet on collecting testimonials for a year. Using Senja was so easy. I integrated it into my app in about a day and have five good testimonials within 48 hours of release. Loving it so far!
                </Typography>
            </Box>
        </Box>
    )
}

export default SlideItem;