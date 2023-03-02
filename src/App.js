import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
