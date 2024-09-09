import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Footer } from 'antd/es/layout/layout';
import Paragraph from 'antd/es/typography/Paragraph';
import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies

import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  PRIMARY_COLOUR,
  SECONDARY_COLOUR,
} from '@/constants/constants';

const footerTextStyle: React.CSSProperties = {
  color: SECONDARY_COLOUR,
};

const AppFooter = () => (
  <Footer
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      background: PRIMARY_COLOUR,
    }}
  >
    <Box sx={{ maxWidth: '50%' }}>
      <Paragraph style={footerTextStyle}> &copy; 2023 Den Den Play Ltd.</Paragraph>
      <Paragraph style={footerTextStyle}>{ADDRESS}</Paragraph>
      <Paragraph style={footerTextStyle}>{PHONE_NUMBER}</Paragraph>
      <Paragraph style={footerTextStyle}>{EMAIL}</Paragraph>
    </Box>
    <Box sx={{ maxWidth: '50%' }}>
      <Paragraph style={footerTextStyle}>Business Hours:</Paragraph>
      <Paragraph style={footerTextStyle}>
        <div>
          <div>Sun-Monday: 1:00PM-9:30PM</div>
          <div>Tuesday: Closed</div>
          <div>Wednesday-Thursday: 1:00PM-9:30PM</div>
          <div>Fri-Sat: 1:00PM-10:30PM</div>
        </div>
      </Paragraph>
    </Box>
  </Footer>
);
export default AppFooter;
