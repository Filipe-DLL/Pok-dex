import { TabList, TabPanel } from 'react-tabs';
import styled from "styled-components";

export const DetailsCard = styled.div`
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
    
    padding: 20px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .react-tabs{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 400px;
    }
`

export const PokemonSection = styled.div` 
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.textColorSecondary};

    width: 100%;
    max-width: 800px;
    min-height: 400px;
    text-align: justify;
    gap: 5%;
    border-radius: 30px;
    z-index: 1;

    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 500px) {
    flex-direction: column;
    }
`

export const StyledTabList = styled(TabList)`
    font-size: x-large;
    font-weight: 600;
    min-width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
        
    color: #FEF7FF;
    background-color: #3c3c3c;
    
    li{
        min-width: 50%;
        text-align:center;
        padding: 10px;
    }

    li:first-child {
        border-top-left-radius: 30px;
    }

    li:last-child {
        border-top-right-radius: 30px;
    }
    
    .react-tabs__tab--selected{                                  
        background-color: #E6E0E9;
        color: #565656;
    }
`;

export const StyledTabPanel = styled(TabPanel)`
  height: 100%;
  flex-grow: 1;
`