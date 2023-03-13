import React from "react";


import { ResponseData } from "../Comics";
import api from "../../services/api";
import "./Hero.css";




const Hero = () => {

   const [search, setSearch] = React.useState("")

   const [comics, setComics] = React.useState<ResponseData[]>([]); 
   




    React.useEffect(() => {

        api.get("/comics")
        .then(response => { 
             
            setComics(response.data.data.results);
           
        })
        .catch(err => console.log(err))
    }, [comics]);

    const handleClick = () => {
        
    }

    
    
    return (
        <div className="container">
          <img  src="https://i1.wp.com/www.tripwiremagazine.co.uk/wp-content/uploads/2017/07/marvel-logo.jpg" alt="Logo Marvel"/>

           <div className="content">
            <h3>Home</h3>
            <h3>Comics</h3>
                <div className="content_header">
                    <input type="text" className="content_input" placeholder="Pesquisa" value={search} onChange={(e) => setSearch(e.target.value)} />
                    
                </div>
                       
           </div>
           <div>
            <button onClick={handleClick}>Sair</button>
           </div>
        </div>
        
    )
}

export default Hero;