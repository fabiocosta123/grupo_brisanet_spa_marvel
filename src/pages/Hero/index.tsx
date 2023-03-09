/*import React from "react";


import "./index.css";

const Hero: React.FC = () => {
    return (
        <div className="context">
            
            <h2>Marvel</h2>
            <div className="nav">
                <ul className="nav_home">
                   
                </ul>
                <ul className="account">
                    <li>Home</li>
                    <li>Comics</li>
                    <li>
                        Minha Conta
                    </li>
                    <li>
                        Sair                        
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Hero;*/

import React from "react";

import "./Hero.css";

const Hero = () => {
    return (
        <div className="container">
          <img  src="https://i1.wp.com/www.tripwiremagazine.co.uk/wp-content/uploads/2017/07/marvel-logo.jpg" alt="Logo Marvel"/>

           <div className="content">
            <h3>Home</h3>
            <h3>Comics</h3>
                <div className="content_header">
                    <input className="content_input" placeholder="Comics" />
                    <button className="btn_investigate">Pesquisar</button>
                </div>
                       
           </div>
           <div>
            <button>Sair</button>
           </div>
        </div>
        
    )
}

export default Hero;