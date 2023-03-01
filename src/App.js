import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Testimony from './components/Testimony';
import Mail from './components/Mail'
import Footer from './components/Footer'

import {
  ChakraProvider,
 
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <Testimony />
      <Mail />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
