import { Box } from '@mui/material';
import React from 'react';
import { Typography } from 'antd';
import Title from 'antd/es/typography/Title';

import PageCard from '@/components/Card/PageCard';
import AppGoogleMap from '@/components/Map/AppGoogleMap';
import { ADDRESS } from '@/constants/constants';
import ContactForm from '@/components/Forms/ContactForm';

const contactInfoData = [
  {
    title: 'Store Address',
    value: <div>{ADDRESS}</div>,
  },
  {
    title: 'Business Hours',
    value: (
      <div>
        <div>Mon-Thu: 12:00PM-11PM</div>
        <div>Fri-Sun: 11:00AM-12AM</div>
      </div>
    ),
  },
];
const ContactUs = () => (
  <PageCard>
    <Box
      className="text-card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingInline: { xs: '10vw', sm: '10vw', md: '10vw', xl: '20vw' },
        justifyContent: 'center',
        gap: '5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: '5rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Typography>
            <Title>
              Visit Us!
            </Title>
          </Typography>
          {contactInfoData.map((item) => (
            <Box>
              <div style={{ fontWeight: 700, marginBottom: '1rem' }}>
                {item.title}
              </div>
              <div>{item.value}</div>
            </Box>
          ))}
        </Box>
        <AppGoogleMap />
      </Box>
      <Box sx={{ width: '100%' }}>
        <ContactForm />
      </Box>
    </Box>
  </PageCard>
);

export default ContactUs;
