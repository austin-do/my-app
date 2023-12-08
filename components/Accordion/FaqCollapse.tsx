'use client';

import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import { Box, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { PRIMARY_COLOUR } from '@/constants/constants';
import { TFAQProps } from '@/types/general';

const FAQCollapse = ({ title, text }: TFAQProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ width: '100%' }}>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '3rem',
          padding: '2rem',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(!open)}
      >
        <div style={{ color: PRIMARY_COLOUR, fontWeight: '600', textTransform: 'uppercase', maxWidth: '80%' }}>
          {title}
        </div>
        {!open ?
          <AddIcon style={{ color: PRIMARY_COLOUR }} /> :
          <RemoveIcon style={{ color: PRIMARY_COLOUR }} />}
      </Box>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Container>
            {text}
          </Container>
        </CardContent>
      </Collapse>
      <Divider />
    </Box>
  );
};

export default FAQCollapse;
