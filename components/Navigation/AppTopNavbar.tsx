'use client';

import * as React from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import Link from 'next/link';
import { Box, IconButton } from '@mui/material';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

import logo from '../../public/images/DenDen.png';

import TemporaryDrawer from './AppDrawerNavMenu';

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
        background: 'white',
      }}
    >
      <Box sx={{ display: { md: 'none', flex: 1 } }}>
        <TemporaryDrawer />
      </Box>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Image
          style={{ marginRight: 1, height: '100%', width: 'auto', flex: 1 }}
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
          <Box sx={{ display: 'flex', gap: '1rem', marginRight: '1rem', alignItems: 'center' }}>
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
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, flexDirection: 'row', flex: 1 }}>
          <Link href="google.com">
            <IconButton aria-label="delete" size="large">
              <Facebook fontSize="inherit" />
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com/dendendori/?hl=en">
            <IconButton aria-label="delete" size="large">
              <Instagram fontSize="inherit" />
            </IconButton>
          </Link>
          <Link href="google.com">
            <IconButton aria-label="delete" size="large">
              <Twitter fontSize="inherit" />
            </IconButton>
          </Link>
        </Box>
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
