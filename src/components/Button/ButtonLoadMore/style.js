import styled from "styled-components";

export const ButtonContainer = styled.div`
    margin: 5px 0 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledButton = styled.button`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textColorPrimary};

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