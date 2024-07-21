import './App.css';

import { Allrouter } from './Router/AllRpouter/AllRouter';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home/Home';
import Low from './Pages/Home/Low';
import LargeWithLogoLeft from './Pages/Home/LargeWithLogoLeft';
import Assets from './Components/Asset/Assets'

function App() {
  return (
    <>
     {/* <Navbar/>
     <Allrouter/>
    
     <LargeWithLogoLeft />
     <Low /> */}
     <Assets/>

    </>
  );
}

export default App;
