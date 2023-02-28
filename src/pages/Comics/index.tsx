import React, { useEffect, useState } from "react";
import api from "../../services/api";

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}
const Comics: React.FC = () => {

    const [comics, setComics] = useState<ResponseData[]>([]); 

    useEffect(() => {

        api.get("/comics")
        .then(response => { 
            
            setComics(response.data.data.results);
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <>
            Marvel 2
        </>
    )
}

export default Comics;