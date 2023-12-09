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
      Tokens：What you put into the machine to start a game
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
