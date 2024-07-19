import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './Redux/Store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <ChakraProvider>
    {/*  <React.StrictMode> */}
    <App />
   {/* </React.StrictMode> */}
    </ChakraProvider>
  </Provider>
  </BrowserRouter>
  
);
