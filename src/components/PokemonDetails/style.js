import styled from "styled-components";

export const PokemonHeader = styled.div`
   
    color: #000;

    width: 80%;
    max-width: 900px;
    
    padding-bottom: 15px;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    position: relative;
    z-index: +1;

    img{
        width: 100%;
        max-width: 300px;
    }
    H2{
        font-size: 80px;
        font-weight:900;
    }
    h3{
        font-size: 30px;
     }
`
export const BehindName = styled.h1`
    color: rgba(255, 255, 255, 0.18);

    height: 100%;
    pointer-events: none;
    text-transform: capitalize;
    position: absolute;
    display: flex;
    font-weight: 900;
    font-size: 20vmax;
    top: 0px;
    z-index: 0;
`