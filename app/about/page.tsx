import { Box } from '@mui/material';
import React from 'react';
import { Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Link from 'next/link';

import PageCard from '@/components/Card/PageCard';
import { FREQUENTLY_ASKED_QUESTIONS_LIST, PRIMARY_COLOUR } from '@/constants/constants';
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
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Paragraph style={{ textAlign: 'center' }}>
          “My partner and I love going to Den Den Dori for dates everytime we watch a movie.
          They have the most adorable plush dolls from my favorite anime and so many beautiful backgrounds for
          photos plus the staff are so wonderful and caring which makes it such a memorable experience.
          We can't wait for our next trip to Den Den Dori!”
        </Paragraph>
        <Link style={{ textDecorationColor: PRIMARY_COLOUR }} href="https://www.google.com/search?q=den+den+dori+kanata+reviews&sca_esv=589414700&sxsrf=AM9HkKnq-dl6fzkyfPhQIMbPot6D6zytlA%3A1702142576345&ei=cKJ0ZcbQFMCmptQPu_yKqAk&ved=0ahUKEwjGyPqc74KDAxVAk4kEHTu-ApUQ4dUDCBA&uact=5&oq=den+den+dori+kanata+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2RlbiBkZW4gZG9yaSBrYW5hdGEgcmV2aWV3c0i8F1DTBFjYFHADeACQAQCYAYIBoAGcB6oBAzUuNLgBA8gBAPgBAcICBBAjGCfiAwQYASBBiAYB&sclient=gws-wiz-serp">
          <Paragraph style={{ color: PRIMARY_COLOUR, fontWeight: 400, fontSize: 16, textAlign: 'center' }}>
            Here&apos;s what our customers are saying about us
          </Paragraph>
        </Link>
      </Box>
    </Box>
  </PageCard>
);

export default ContactUs;
