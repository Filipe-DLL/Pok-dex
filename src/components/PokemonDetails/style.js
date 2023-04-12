import styled from "styled-components";

export const PokemonHeader = styled.div`
   
    color: #fff;

    width: 80%;
    max-width: 900px;
    
    padding-bottom: 15px;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: relative;
    z-index: +1;

    img{
        width: 100%;
        max-width: 300px;
    }
    h2{
        width: 100%;
        font-size: 80px;
        font-weight:900;
        margin-bottom: -9px;
    }
    h3{
        color: #565656;
        font-size: 28px;
        font-weight: 500;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
`
export const BehindName = styled.h1`
    color: rgba(255, 255, 255, 0.18);
    
    max-width: 100%;
    height: 100%;
    pointer-events: none;
    text-transform: capitalize;
    position: absolute;
    display: flex;
    font-weight: 900;
    font-size: 20vmax;
    top: 0px;
    z-index: 0;    

    overflow-x: hidden;
`