import './App.css';

import { Allrouter } from './Router/AllRpouter/AllRouter';
import { Navbar } from './Components/Navbar/Navbar';
import { PrivateRouter } from './Router/PrivateRouter/PrivateRouter';


function App() {
  return (
    <>
     <Navbar/>
     <Allrouter/>
    </>
  );
}

export default App;
