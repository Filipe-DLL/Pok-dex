import styled from 'styled-components';

export const ContainerAbilities = styled.div`
    /* border: solid 1px wheat; */
    color: ${props => props.theme.textColorPrimary};
    
    min-width: 60%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    
    h1{
        font-size: xx-large;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2{
        text-transform: capitalize;
        font-size: x-large;
        margin-bottom: 5px;
    }
    p{
        font-size: medium;
    }
`