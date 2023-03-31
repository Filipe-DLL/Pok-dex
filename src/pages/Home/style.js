import styled from "styled-components";

export const HomeContainer = styled.div`
     background: ${props => props.theme.background};
     color: ${props => props.theme.color};

     min-height: 100vh;
     min-width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
`

export const Header = styled.div`
     /* background: #191F28; */
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     margin-right: 10px;
     padding-top: 6px;
     /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
`