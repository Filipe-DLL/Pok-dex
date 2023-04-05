import styled from "styled-components";

export const DetailsCard = styled.div`
    /* border: solid 1px green; */
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textColorPrimary};

    max-width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    /* border: solid 1px pink; */

    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const PokemonHeader = styled.div`
    /* border: solid 1px red; */

    width: 100%;
    padding-bottom: 15px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    img{
        /* border: solid 1px yellow; */

        width: 300px;
    }
    h1{
        font-size: xx-large;
        font-weight: bold;
    }
    h2{
        font-size: large;
     }
`
export const PokemonSection = styled.div`
    /* border: solid 1px brown; */
    
    width: 100%;
    /* padding: 15px; */
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 5%;

    @media (max-width: 500px) {
    flex-direction: column;
    }
`