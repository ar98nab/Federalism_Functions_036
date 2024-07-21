import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  BellIcon,
} from '@chakra-ui/icons';
import { Searchbar } from '../Search/Search';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/LogIn');
  };

  const handleSignup = () => {
    navigate('/SignUp');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box className="Navbar">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <Image w={'100px'} h={'40px'} src="../src/Components/Navbar/logonew.png" alt="Logo" />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Searchbar />
        <BellIcon h={'60px'} mr={'20px'} />
        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          {user != null ? (
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'blue'}
              bg={'aqua'}
              borderRadius={'80px'}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          ) : (
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'blue'}
              bg={'aqua'}
              borderRadius={'80px'}
              onClick={handleLogin}
            >
              Log In
            </Button>
          )}

          {user == null && (
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'white'}
              bg={'blue'}
              borderRadius={'80px'}
              _hover={{ bg: 'blue.600' }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NavLink
                to={navItem.href ?? '#'}
                p={2}
                fontSize={'lg'}
                fontWeight={'bold'}
                color={linkColor}
                _hover={{
                  textDecoration: 'underline',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </NavLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <NavLink
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      fontWeight={'bold'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </NavLink>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={NavLink}
        to={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        fontWeight={'bold'}
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
          {children && children.map((child) => (
            <NavLink key={child.label} py={2} to={child.href} style={{ fontWeight: 'bold' }}>
              {child.label}
            </NavLink>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Explore',
    children: [
      {
        label: 'For You',
        href: '/product',
      },
      {
        label: 'Search & Explore',
        href: '#',
      },
      {
        label: 'Curated Galleries',
        href: '#',
      },
    ],
  },
  {
    label: 'Assets',
    href: '#',
  },
  {
    label: 'Registration',
    href: '/registration',
  },
  {
    label: 'Pixel Pro',
    href: '#',
  },
  {
    label: 'Hire Freelancers',
    children: [
      {
        label: 'Freelance',
        href: '/freelancers',
      },
      {
        label: 'My Freelance Projects',
        href: '#',
      },
      {
        label: 'New Freelance Projects',
        href: '#',
      },
    ],
  },
];
