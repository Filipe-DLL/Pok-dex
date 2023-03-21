import styled from "styled-components";

export const PokemonDetails = styled.div`
    width: 100%;
    height: 100%;
    /* border: solid 1px green; */
    display: flex;
    align-content: center;
    justify-content: center;
`

export const Container = styled.div`
    /* border: solid 1px red; */
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
`
export const PokemonHeader = styled.div`
    /* border: solid 1px red; */
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    text-align: center;

    img{
        width: 300px;
        /* border: solid 1px yellow; */
    }
`
export const PokemonSection = styled.div`
    width: 100%;
    text-align: center;
    list-style: none;
`