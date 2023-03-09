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

import logo from "../../img/logo-marvel.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="container">
           <img src={logo} />

           <div className="content_header">
            <h3 className="px-8">Home</h3>
            <h3 className="cursor-pointer">Comics</h3>
                <div className="relative">
                    <input className="mx-64 border rounded-lg flex absolute" placeholder="Comics" />
                    <button className="btn_investigate">Pesquisar</button>
                </div>
                       
           </div>
           <div className="relative my-16 mx-10">
            <button>Sair</button>
           </div>
        </div>
        
    )
}

export default Hero;