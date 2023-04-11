import styled from "styled-components";

export const ButtonContainer = styled.div`
    font-size: 50px;
    position: absolute;
    color: white;
    text-decoration: none;
    transition: all ease-out 0.3s;
    left: 20px;

    a{
        color: ${props => props.theme.previousPrimary};
    }
    
    &:hover{
        transform: scale(1.12);
        opacity: 0.7;
    }
`