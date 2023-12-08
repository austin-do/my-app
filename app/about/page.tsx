import { Box } from '@mui/material';
import React from 'react';
import { Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

import PageCard from '@/components/Card/PageCard';
import { FREQUENTLY_ASKED_QUESTIONS_LIST } from '@/constants/constants';
import FAQCollapse from '@/components/Accordion/FaqCollapse';

const ContactUs = () => (
  <PageCard>
    <Box
      className="text-card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingInline: { xs: '1vw', sm: '10vw', md: '10vw', xl: '20vw' },
        justifyContent: 'center',
        gap: '5rem',
      }}
    >

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography>
          <Title>About Us</Title>
          <Paragraph>
            Located in Kanata - we are the only
            claw machine store in Ottawa (with the friendliest employees around!)
          </Paragraph>
          <Paragraph>
            Have a little taste of some Japanese inspiration brought to Ottawa!
            We&apos;re dedicated to shaking up the scene with some fresh
            and exhilirating experiences from overseas.
          </Paragraph>
          <Paragraph>
            Not sure what to do on date night? Just looking for a spot to hang out and have fun?
            Test your skill and impress your friends and family at Den Den Dori!
            We offer a HUGE selection of your favourite brands, from anime to japanese mascots.
            Find a prize that speaks to you and zone in for the hunt!
          </Paragraph>
          <Paragraph>
            Make sure to bring your phones and share pictures of your
            awesome memories and trophies on social media when you come!
          </Paragraph>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row', gap: '2rem' }, justifyContent: 'space-evenly' }}>
        <Title style={{ flex: 1 }}>Frequently Asked Questions</Title>
        <Box sx={{ flex: 2 }}>
          {FREQUENTLY_ASKED_QUESTIONS_LIST.map((item) => (
            <FAQCollapse title={item.title} text={item.text} />
          ))}
        </Box>
      </Box>
    </Box>
  </PageCard>
);

export default ContactUs;
