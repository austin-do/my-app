import { Button, Carousel, Typography } from 'antd';
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

import pic1 from '../public/images/1.jpg';
import pic2 from '../public/images/2.jpg';
import pic3 from '../public/images/3.jpg';
import pic4 from '../public/images/4.jpg';

const picArray = [pic1, pic2, pic3, pic4];

const headerStyle: React.CSSProperties = {
  color: '#99cced',
  fontWeight: 600,
  textTransform: 'uppercase',
};

const paragraphStyle: React.CSSProperties = {
  marginTop: '2rem',
};

const Home = () => (
  <>
    <Box
      className="text-card"
      sx={{
        background: '#f7f7f7',
        display: 'flex',
        paddingBlock: '5rem',
        paddingInline: { xs: '10vw', sm: '10vw', md: '10vw', xl: '20vw' },
        justifyContent: 'center',
      }}
    >
      <Box
        className="text-spacing-container-column"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: { xs: '100%', sm: '100%', md: '50%' },
        }}
      >
        <div style={headerStyle}>More than just Claw Machines Games!</div>
        <Box
          sx={{
            fontWeight: '800',
            fontSize: { xs: 20, sm: 20, md: 30, xl: 40 },
            textTransform: 'capitalize',
          }}
        >
          Adding fun to your life
        </Box>
        <Typography
          style={{
            fontWeight: '400',
            fontSize: 18,
          }}
        >
          We are your go-to claw machine hangout. Our goal is to make sure
          everyone who comes in & has a great time and win some awesome prizes.
          <br />
          <br />
          We know that life is already hard and maybe boring enough during the
          weekday. Bring your friends, family, & loves one together and enjoy
          this fun moment together!
        </Typography>
        <Button
          style={{ width: '40%', color: '#f7f7f7', backgroundColor: '#99cced' }}
        >
          Let the Fun Begin
        </Button>
      </Box>
    </Box>
    <Carousel
      autoplay
      style={{
        background: 'black',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {picArray.map((pic) => (
        <div style={{ position: 'relative', width: '500px', height: '300px' }}>
          <Image
            priority
            src={pic}
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
          />
        </div>
      ))}
    </Carousel>
    <div
      className="text-card"
      style={{
        background: '#f7f7f7',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: 50,
        paddingInline: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
      }}
    >
      <div
        style={{
          fontWeight: '600',
          fontSize: 30,
          textTransform: 'capitalize',
        }}
      >
        How Does It Work?
      </div>
      <Box
        className="text-spacing-container-row"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: '3rem',
        }}
      >
        <Box>
          <div style={headerStyle}>Step 1: Buy Tokens</div>
          <div style={paragraphStyle}>
            To start, you will need to buy tokens to play. Each machine costs
            around 3 to 8 tokens per round so keep that in mind when purchasing
            tokens!
          </div>
        </Box>
        <Box>
          <div style={headerStyle}>Step 2: Play and Have Fun!</div>
          <div style={paragraphStyle}>
            Each plushie is worth a certain amount of points. This means you can
            win whatever is easy for you instead of spending too many coins on
            one plush (points for plushies are stated on the machine)!
          </div>
        </Box>
        <Box>
          <div style={headerStyle}>STEP 3: UPGRADE/TRADE (OPTIONAL)</div>
          <div style={paragraphStyle}>
            You could always trade-in unwanted plushies that you win to upgrade
            to another prize at the front counter. Upgrading gives you more
            selections for cuter and nicer plushies, but this is all up to you
            and your preference!
          </div>
        </Box>
      </Box>
    </div>
  </>
);
export default Home;
