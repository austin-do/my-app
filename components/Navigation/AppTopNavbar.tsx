'use client';

import * as React from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import Link from 'next/link';
import { Box, IconButton } from '@mui/material';
import { usePathname } from 'next/navigation';

import logo from '../../public/images/DenDenLogo.png';

import TemporaryDrawer from './AppDrawerNavMenu';

import { NAV_ITEMS, SOCIAL_LINKS } from '@/constants/constants';

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
          style={{ marginRight: 1, height: '75px', width: 'auto', flex: 1 }}
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
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.displayText}
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
          {SOCIAL_LINKS.map((item) => (
            <Link href={item.url} key={item.name}>
              <IconButton aria-label="delete" size="large">
                {item.icon}
              </IconButton>
            </Link>
          ))}
        </Box>
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
