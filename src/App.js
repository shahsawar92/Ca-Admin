import { useState } from 'react';
import './App.css';
import Home from './Components/Home-page';
import MyNavbar from './Components/Navbar';
import ToggleSidebar from './Components/Toggle-Nav';

function App() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="app">
        <ToggleSidebar isOpen={isOpen} setIsopen={setIsopen}/>
        <MyNavbar isOpen={isOpen} setIsopen={setIsopen} />
        <Home />
      </div>
  );
}

export default App;
