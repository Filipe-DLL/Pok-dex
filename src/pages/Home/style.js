import styled from "styled-components";

export const HomeContainer = styled.div`
     background: ${props => props.theme.primary};
     color: ${props => props.theme.textColorPrimary};

     min-height: 100vh;
     min-width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
`

export const Header = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     margin-right: 10px;
     padding-top: 6px;

     div{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
     }
`