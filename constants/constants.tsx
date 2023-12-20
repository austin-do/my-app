import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Facebook, Instagram } from '@mui/icons-material';

const TikTokIcon = () => (
  <svg
    fill="grey"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="28px"
    height="28px"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
  </svg>
);

export const PRIMARY_COLOUR = '#99cced';
export const SECONDARY_COLOUR = '#f7f7f7';
export const ADDRESS_GOOGLE_MAPS_COORDINATES = {
  lat: 45.279898396048885,
  lng: -75.86293846150105,
};
export const ADDRESS = '103 Huntsman Cres, Ottawa, ON K2M 1H8';
export const EMAIL = 'dendendori@gmail.com';
export const PHONE_NUMBER = '613-400-2909';

export const SOCIAL_LINKS = [
  {
    name: 'facebook',
    icon: <Facebook fontSize="inherit" />,
    url: 'https://www.facebook.com/profile.php?id=61554656757911',
  },
  {
    name: 'instagram',
    icon: <Instagram fontSize="inherit" />,
    url: 'https://www.instagram.com/dendendori/?hl=en',
  },
  {
    name: 'tiktok',
    icon: <TikTokIcon />,
    url: 'https://www.tiktok.com/@dendendori',
  },
];

export const NAV_ITEMS = [
  {
    displayText: 'Home',
    path: '/' || '/home',
  },
  {
    displayText: 'About',
    path: '/about',
  },
  {
    displayText: 'Contact Us',
    path: '/contact-us',
  },
];

export const FREQUENTLY_ASKED_QUESTIONS_LIST = [
  {
    title: 'How Does Den den dori work?',
    text:
  <Paragraph>
    Den Den Dori is a claw-machine store.
    You can buy the game tokens at the front reception and start playing!
    What you win from the machines are all yours!
    You can either bring them home, or, to add a little bit of fun,
    trade them into points to redeem something bigger!
  </Paragraph>,
  },
  {
    title: 'What are Points and Tokens?',
    text:
  <>
    <Paragraph>
      Tokens: What you put into the machine to start a game
    </Paragraph>
    <Paragraph>
      Points: Each prize is worth a certain number of points (listed on the machine)
      you can trade multiple prizes you win for a bigger or better one!
    </Paragraph>
  </>,
  },
  {
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
