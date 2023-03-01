import React from 'react';

import Comics from "../src/pages/Comics/index";
import GlobalStyle from "./styles/global";



const App: React.FC = () =>{

  return (
    <div className="App">
   
     <Comics />
     <GlobalStyle/>
    </div>
  );
}

export default App;
