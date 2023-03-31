import styled from "styled-components";

export const ButtonContainer = styled.div`
    align-self: flex-end;
    margin: 0 10px;
    padding: 10px;
    border-radius: 10px;
`
export const StyledButton = styled.button`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};

    height: 30px;
    width: 60px;
    min-width: 50px;
    border-radius: 15px;
    cursor: pointer;
    transition: all ease-out 0.3s;

    &:hover{
        transform: scale(1.07);
        opacity: 0.9;
    }
`