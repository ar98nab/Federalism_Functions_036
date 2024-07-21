import './App.css';

import { Allrouter } from './Router/AllRpouter/AllRouter';
import { Navbar } from './Components/Navbar/Navbar';


import { PrivateRouter } from './Router/PrivateRouter/PrivateRouter';
import LargeWithLogoLeft from './Pages/Home/LargeWithLogoLeft';
import Low from './Pages/Home/Low';


function App() {
  return (
    <>
    <Navbar/>
    <Allrouter/>
   
    </>
  );
}

export default App;
