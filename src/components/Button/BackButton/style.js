import styled from "styled-components";

export const ButtonContainer = styled.div`
    color: ${props => props.theme.secondary};

    font-size: 50px;
    position: absolute;
    color: white;
    text-decoration: none;
    transition: all ease-out 0.3s;
    
    
    &:hover{
        transform: scale(1.12);
        opacity: 0.7;
    }
`