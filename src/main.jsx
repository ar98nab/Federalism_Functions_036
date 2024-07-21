import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './Redux/Store.js';

import { SearchContextProvider } from './Context/SearchContext/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchContextProvider>
  <BrowserRouter>
  <Provider store={store}>
    <ChakraProvider>
    {/*  <React.StrictMode> */}
    
    <App />
   {/* </React.StrictMode> */}
    </ChakraProvider>
  </Provider>
  </BrowserRouter>
  </SearchContextProvider>
);
