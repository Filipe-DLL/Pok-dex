import styled from "styled-components";

export const ButtonContainer = styled.div`
    align-self: flex-end;
    margin: 0 10px;
    padding: 10px;
    border-radius: 10px;
`
export const StyledButton = styled.button`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textColorPrimary};

    font-size: 20px;
    height: 40px;
    width: 40px;
    min-width: 35px;
    border-radius: 100%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all ease-out 0.3s;

    &:hover{
        transform: scale(1.07);
        opacity: 0.9;
    }
`