import { Box } from '@mui/material';
import * as React from 'react';

const PageCard = (props: any) => {
  const { children } = props;
  return (
    <Box
      sx={{
        background: '#f7f7f7',
        padding: '5vw',
      }}
    >
      {children}
    </Box>
  );
};

export default PageCard;
