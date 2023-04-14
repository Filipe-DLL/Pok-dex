import styled from "styled-components";

export const Container = styled.div`
   color: ${props => props.theme.previousPrimary};

   gap: 6px;
   font-size: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Input = styled.input`
   border-radius: 10px;
   padding: 3px;
   padding-left: 15px;
   height: 35px;
   width: 130px;
`