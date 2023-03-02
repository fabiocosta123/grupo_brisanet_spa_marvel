import React, { useEffect, useState, useCallback } from "react";
import api from "../../services/api";
import {FiChevronDown} from "react-icons/fi";

import { Container, Card, CardList, ButtonMore  } from "../../pages/Comics/styles"

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

    const handleMore = useCallback(async() => {
        try {
            const offset = comics.length;
            const response = await api.get("comics", {
                params: {
                    offset,
                },
            });

            setComics([ ...comics, ...response.data.data.results])
        } catch(err){
            console.log(err);
        }    
    }, [comics])
    return (
        <>
            <Container>
               <CardList>
                {comics.map(comic => {
                    return (
                        <Card key={comic.id} thumbnail={comic.thumbnail}>
                            <div id="img" />
                            <h2>{comic.name}</h2>
                            <p>{comic.description}</p>
                        </Card>
                        
                    )
                })}
               </CardList>
               <ButtonMore onClick={handleMore}>
                <FiChevronDown size="20">
                
                </FiChevronDown>
                    MAIS
                <FiChevronDown size="20">

                </FiChevronDown>
                    
               </ButtonMore>
            </Container>
        </>
    )
}

export default Comics;