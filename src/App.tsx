import React from 'react';

import Hero from "./pages/Hero/index";
import Comics from "../src/pages/Comics/index";
import GlobalStyle from "./styles/global";



const App: React.FC = () =>{

  return (
    <div className="App">
     <Hero />
     <Comics />
     <GlobalStyle/>
    </div>
  );
}

export default App;
