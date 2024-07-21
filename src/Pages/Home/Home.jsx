import { Box, Container } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import AvatarList from './AvatarList';
import ImageHome from './ImageHome';
import LargeWithLogoLeft from './LargeWithLogoLeft';
import Profile from './Profile';
import Low from './Low';
import { MdVisibility } from 'react-icons/md';

export const Home = () => {
  const footerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({
    position: 'fixed',
    top: '0px',
    transition: 'top 0.3s ease, position 0.3s ease',
  });

  const images = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/693ae5166210441.641438ccf3926.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8f4c99166210441.641438ccf2a56.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/f2cff3166210441.6414398bdfad4.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b09f96166210441.64143d38eafa1.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/febd73166210441.64143d38f121f.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4268ab166210441.64143d38ef5af.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ed7258166210441.64143d38f0374.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d207ee166210441.64143d38ee86e.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1dc559166210441.64143d38edae8.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9f29c7166210441.64143d38ea1a9.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c2cdf9166210441.64143d38ebd6c.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/994b39166210441.64143d38ecb1e.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bc8c66166210441.64143d38e9311.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/073d8c166210441.64143d38e8644.png',
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current || !sidebarRef.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const sidebarRect = sidebarRef.current.getBoundingClientRect();

      // If the footer is approaching, adjust the sidebar position
      if (footerRect.top < sidebarRect.height + 20) { // Adjust 20px if needed
        const newTop = footerRect.top - sidebarRect.height - 20; // Adjust 20px if needed
        if (sidebarStyle.position === 'fixed') {
          setSidebarStyle({
            position: 'absolute',
            top: `${newTop}px`,
            transition: 'top 0.3s ease, position 0.3s ease',
          });
        }
      } else {
        if (sidebarStyle.position === 'absolute') {
          setSidebarStyle({
            position: 'fixed',
            top: '0px',
            transition: 'top 0.3s ease, position 0.3s ease',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sidebarStyle.position]);

  return (
    <div>
      <Container maxW="100%">
        <Container maxW="100%" display="flex">
          <Box
            padding="4"
            color="black"
            minW="90%"
            borderColor="gray.200"
          >
            <Box
              padding="4"
              color="black"
              ml="5%"
            >
              <Box padding="4" color="black">
                <Profile />
              </Box>
              <Box>
                {images.map((el, index) => (
                  <ImageHome key={index} url={el} />
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            padding="4"
           
            color="black"
            maxW="10%"
            ref={sidebarRef}
            style={{
              position: sidebarStyle.position,
             
              left: '87%',
              top: "20%",
              transition: 'top 0.9s ease, position 1.0s ease',
            }}
          >
            <AvatarList />
          </Box>
        </Container>
        <Container maxW="100%"  bgColor="black"  zIndex={2}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box ref={footerRef}></Box> {/* Footer */}
        </Container>
       
      </Container>
    </div>
  );
};
