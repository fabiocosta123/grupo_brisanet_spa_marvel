import styled from "styled-components";

interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    }
}
export const Container = styled.main`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
`
export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
    
`;

const urlImg = (props: ThumbnailData) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
    background: #c0c0c0;
    height: 450px;
    width: 300px;
    marign: 10rem;
    
    border-radius: .8rem;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    h2, p {
        padding: 5px;
        text-align: justify;

    }

    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
        
        transition: all 1s;
    }

    &:hover {
        div#img {
            height: 100px;
            cursor: pointer;
        }
    }
`;


export const ButtonMore = styled.button`
    background: #f1f1ff1;
    height: 40px;
    cursor: pointer;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.30);
    margin: 20px auto;
    padding: 0 50px;
    border-radius: 5px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover{
        background: #ec1d24;
    }
`
