import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';

export const PRIMARY_COLOUR = '#99cced';
export const SECONDARY_COLOUR = '#f7f7f7';
export const ADDRESS_GOOGLE_MAPS_COORDINATES = {
  lat: 45.279898396048885,
  lng: -75.86293846150105,
};
export const ADDRESS = '103 Huntsman Cres, Ottawa, ON K2M 1H8';
export const EMAIL = 'dendendori@gmail.com';
export const PHONE_NUMBER = '613-400-2909';

export const FREQUENTLY_ASKED_QUESTIONS_LIST = [{
  title: 'I\'M NOT VERY GOOD AT CLAW GAMES, CAN I STILL HAVE FUN?',
  text:
  <>
    <Paragraph>
      If you find yourself struggling with any of the machines feel free to ask any staff for help!
      We would love to help you walk home with your favourite prize!
    </Paragraph>
    <Paragraph>
      We also offer many other sources of fun, such as gachapon machines,
      picture booths and hang out spot!
    </Paragraph>
  </>,
},
{
  title: 'Can I buy the prizes directly?',
  text:
  <Paragraph>
    Sometimes luck won&apos;t be in your favour... and that&apos;s okay!
    Ask the staff at the counter to make sure you go home with that prize you&apos;ve been eyeing!
  </Paragraph>,
},
{
  title: 'When will you be open?',
  text:
  <Paragraph>
    We are working on finding a location! Visit this site or our socials for updates. See you soon!
  </Paragraph>,
},
];
