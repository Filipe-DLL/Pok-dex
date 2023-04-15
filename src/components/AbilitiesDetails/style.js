import styled from 'styled-components';

export const ContainerAbilities = styled.div`
    
    min-width: 60%;
    height: 100%;
    padding: 10px;
    margin:10px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    
    h1{
        color: ${props => props.theme.textColorPreviousPrimary};
        font-size: xx-large;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2{
        color: ${props => props.theme.textColorPreviousPrimary};
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