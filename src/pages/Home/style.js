import styled from "styled-components";

export const HomeContainer = styled.div`
     background: ${props => props.theme.background};
     color: ${props => props.theme.color};

     min-height: 100vh;
     min-width: 100vw;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
`