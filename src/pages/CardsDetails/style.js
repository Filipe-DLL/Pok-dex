import styled from "styled-components";

export const DetailsCard = styled.div`
    /* border: solid 1px green; */
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textColorSecondary};

    max-width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%),${props => props.types[props.pokemon.types[0].type.name]} ;
    background-blend-mode: soft-light, normal;
    /* background: ${props => props.types[props.pokemon.types[0].type.name]}; */
    
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PokemonSection = styled.div` 
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.textColorSecondary};

    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    gap: 5%;
    border-radius: 30px;
    max-width: 800px;
    z-index: 1;

    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 500px) {
    flex-direction: column;
    }
`