import React from 'react';

import Hero from "./pages/Hero/index";
import Comics from "../src/pages/Comics/index";
import GlobalStyle from "./styles/global";
import GoogleMaps from './pages/Google/googleMaps';




const App: React.FC = () =>{

  return (
    <div className="App">
     <Hero />
     <Comics />
     <GlobalStyle/>
     <GoogleMaps />
     </div>
  );
}

export default App;
