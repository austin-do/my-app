'use client';

import * as React from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Link from 'next/link';
import { Box } from '@mui/material';

const ResponsiveAppBar = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    }}
  >
    <Box sx={{ display: { md: 'none' } }}>
      <button type="button" className="inline-flex items-center md:hidden">
        {/* Menu icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      </button>
    </Box>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Image
        style={{ marginRight: 1 }}
        src="/images/DenDen.png"
        width={100}
        height={100}
        alt="Den Den Logo"
      />
    </div>

    <Box
      sx={{
        display: { xs: 'none', sm: 'none', md: 'flex' },
        flexDirection: 'row',
      }}
    >
      <Space size={100}>
        <Link
          style={{ fontSize: 30, fontWeight: 500, color: '#99cced' }}
          href="/"
        >
          Home
        </Link>
        <Link
          style={{ fontSize: 30, fontWeight: 500, color: '#99cced' }}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </Space>
    </Box>

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Space>
        <Button icon={<FacebookFilled />} href="https://www.google.com" />
        <Button
          icon={<InstagramFilled />}
          href="https://www.instagram.com/dendendori/?hl=en"
        />
      </Space>
    </div>
  </div>
);
export default ResponsiveAppBar;
