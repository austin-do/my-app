'use client';

import * as React from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Link from 'next/link';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import logo from '../../public/images/DenDen.png';

const navItems = [
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
const ResponsiveAppBar = () => {
  const path = usePathname() || '';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: '2rem',
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
          style={{ marginRight: 1, height: '100%', width: 'auto' }}
          src={logo}
          alt="Den Den Logo"
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            flexDirection: 'row',
          }}
        >
          <Box sx={{ display: 'flex', gap: '1rem', marginRight: '1rem' }}>
            {navItems.map((item) => (
              <Link
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#99cced',
                  textDecoration: path === item.path ? 'underline' : 'none',
                }}
                href={item.path}
              >
                <div>{item.displayText}</div>
              </Link>
            ))}
          </Box>
        </Box>
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
};
export default ResponsiveAppBar;
