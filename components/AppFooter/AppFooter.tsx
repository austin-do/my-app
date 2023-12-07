import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Footer } from 'antd/es/layout/layout';
import { Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

import { PRIMARY_COLOUR } from '@/constants/constants';

const AppFooter = () => (
  <Footer style={{ textAlign: 'center', background: PRIMARY_COLOUR }}>
    <Typography>
      <Paragraph>
        3215 Hwy 7, Unit G3 Markham, ON L3R 3P3 (647) 891-6666
        clawandkitty@gmail.com
      </Paragraph>
    </Typography>
    @2023 Den Den Dori
  </Footer>
);
export default AppFooter;
