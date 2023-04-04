import styled from "styled-components";

export const ButtonContainer = styled.div`
    margin: 30px 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledButton = styled.button`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textColorSecondary};

    height: 30px;
    width: 10%;
    min-width: 150px;
    border-radius: 15px;
    cursor: pointer;
    transition: all ease-out 0.3s;

    &:hover{
        transform: scale(1.07);
        opacity: 0.9;
    }
`