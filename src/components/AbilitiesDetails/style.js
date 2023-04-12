import styled from 'styled-components';

export const ContainerAbilities = styled.div`
    color: ${props => props.theme.textColorPrimary};    
    
    min-width: 60%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    
    h1{
        color: #565656;
        font-size: xx-large;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2{
        color: #565656;
        padding: 5px 0;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        font-size: x-large;
        margin-bottom: 5px;
    }
    p{
        font-size: medium;
    }
`