import { Button, Carousel, Typography } from 'antd';
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import pic1 from '../public/images/test1.jpg';
import pic2 from '../public/images/test2.jpg';

import { PRIMARY_COLOUR, SECONDARY_COLOUR } from '@/constants/constants';
import AppEmblaCarousel from '@/components/Carousel/EmblaCarousel';

const picArray = [pic1, pic2];

const headerStyle: React.CSSProperties = {
  color: PRIMARY_COLOUR,
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
        background: SECONDARY_COLOUR,
        display: 'flex',
        paddingBlock: { xs: '2rem', sm: '2rem', md: '5rem' },
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
        <div style={headerStyle}>Welcome to Den Den Dori</div>
        <Box
          sx={{
            fontWeight: '800',
            fontSize: { xs: 20, sm: 20, md: 30, xl: 40 },
            textTransform: 'capitalize',
          }}
        >
          More than just Claw Machines
        </Box>
        <Typography
          style={{
            fontWeight: '400',
            fontSize: 18,
          }}
        >
          We are your go-to claw machine hangout. Our goal is to make sure
          everyone who comes in has a great time and goes home with some awesome
          prizes and memories.
          <br />
          <br />
          Explore and discover not only fun claw machine games,
          but an electric and vibrant Japanese ambiance, photobooths,
          gachapon machines, and more! What are you waiting for?
        </Typography>
        <Link href="/contact-us">
          <Button
            style={{
              minWidth: '150px',
              width: '40%',
              color: '#f7f7f7',
              backgroundColor: '#99cced',
            }}
          >
            Let the Fun Begin
          </Button>
        </Link>
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
        <div style={{ position: 'relative', width: '500px', height: '300px' }} key={pic.src}>
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
            To start, you&apos;re going to need to load up on plenty of tokens to play.
            Each machine costs around 3 to 8 tokens per round so keep that in mind!
          </div>
        </Box>
        <Box>
          <div style={headerStyle}>Step 2: Play and Have Fun!</div>
          <div style={paragraphStyle}>
            Each prize is worth a certain amount of points. We suggest testing and searching for
            which prize you can win the easiest for the most amount of points.
            Or just play for what toy you think is coolest!
            (points for plushies are stated on the machine)!
          </div>
        </Box>
        <Box>
          <div style={headerStyle}>STEP 3: UPGRADE/TRADE (OPTIONAL)</div>
          <div style={paragraphStyle}>
            We offer trade-ins for unwanted plushies that you win to upgrade
            to another prize at the front counter. Upgrading gives you more
            selections for cuter and nicer prizes!
          </div>
        </Box>
      </Box>
    </div>
  </>
);
export default Home;
