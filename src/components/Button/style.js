import styled from "styled-components";

export const ButtonContainer = styled.div`
    margin: 50px 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledButton = styled.button`
    height: 30px;
    width: 10%;
    min-width: 150px;
    border-radius: 15px;
    cursor: pointer;
    background-color: #fff;
    color: #000;
    transition: all ease-out 0.3s;

    &:hover{
        transform: scale(1.07);
        opacity: 0.9;
    }
`