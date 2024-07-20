import store from './Reducer/store';
import './App.css';
import Assets from './Components2/Assets';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
 

  return (
    <>
    <ChakraProvider>
     <Provider store={store}>
      <Assets/>
     </Provider>
     </ChakraProvider>
    
     
    </>
  );
}

export default App;
