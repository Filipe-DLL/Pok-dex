import styled from "styled-components";

export const PokemonDetails = styled.div`
    width: 100%;
    height: 100%;
    border: solid 1px green;
    display: flex;
    align-content: center;
    justify-content: center;
`

export const Container = styled.div`
    border: solid 1px pink;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
`
export const PokemonHeader = styled.div`
    border: solid 1px red;
    width: 100%;
    padding-bottom: 15px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 300px;
        border: solid 1px yellow;
    }
`
export const PokemonSection = styled.div`
    border: solid 1px brown;
    width: 100%;
    padding: 15PX;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 10%;
`