import React from "react";

import "./index.css";

const Hero: React.FC = () => {
    return (
        <div className="context">
            
            <h2>Marvel</h2>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Comics</li>
                </ul>
                <ul className="account">
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

export default Hero;