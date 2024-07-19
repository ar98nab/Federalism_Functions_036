import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Allrouter } from './Router/AllRpouter/AllRouter';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Navbar/>
     <Allrouter/>
    </>
  );
}

export default App;
