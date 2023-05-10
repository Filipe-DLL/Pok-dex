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
     justify-content: space-between;
     margin-right: 10px;
     padding: 6px 0 6px 30px;

     div{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
     }
     @media (max-width: 450px) {
          padding: 0;
          gap: 5px;
          margin-right: 0px;
          div{
               gap: 0px;
          }
     }
`