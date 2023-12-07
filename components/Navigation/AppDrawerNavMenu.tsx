import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';

import { PRIMARY_COLOUR, SECONDARY_COLOUR } from '@/constants/constants';

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

const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

const FullScreenDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const path = usePathname() || '';

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <MenuIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', background: PRIMARY_COLOUR }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ color: SECONDARY_COLOUR }}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: SECONDARY_COLOUR }} variant="h6" component="div">
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '10%' }}>

          {navItems.map((item) => (
            <Link
              style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: '#99cced',
                textDecoration: path === item.path ? 'underline' : 'none',
              }}
              href={item.path}
              onClick={handleClose}
            >
              <div>{item.displayText}</div>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '10%' }}>
          <Link href="google.com">
            <IconButton aria-label="delete" size="large">
              <Facebook fontSize="inherit" />
            </IconButton>
          </Link>
          <Link href="google.com">
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
      </Dialog>
    </>
  );
};

export default FullScreenDialog;
