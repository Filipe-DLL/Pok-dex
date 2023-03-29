import styled from "styled-components";

export const Lista = styled.ul`
    /* border: solid 1px red; */
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Li = styled.li`
    /* border: solid 1px blue; */
    
    width: 200px;
    display: flex;
    flex-direction: row;
    flex-basis: 19%;
    align-items: center;
    justify-content: center;

    a{
        color: ${props => props.theme.color};
        cursor: pointer;
        text-transform: capitalize;
        text-align: center;
    }
`