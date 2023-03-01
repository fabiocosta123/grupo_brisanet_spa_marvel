import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container } from "../../pages/Comics/styles"

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
             console.log(response.data);
            setComics(response.data.data.results);
           
        })
        .catch(err => console.log(err))
    }, []);
    return (
        <>
            <Container>
                <h1>Comics</h1>
                <ul>
                    {comics.map(comic => {
                        return (
                            <li key={comic.id}>
                                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Foto do ${comic.name}`}/>
                                <span className="name">{comic.name}</span>
                                <span className="description">{comic.description}</span>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </>
    )
}

export default Comics;