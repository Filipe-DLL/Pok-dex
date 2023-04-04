import styled from "styled-components"

export const Lista = styled.ul`
    /* border: solid 1px red; */
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Li = styled.li`
background: linear-gradient(to bottom, #3f3f 25%, #fefe 50%, ${props => props.theme.secondary} 51%, ${props => props.theme.secondary} 100%);
 
    width: 200px;
    margin: 4px 7.5px 15px 7.5px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    flex-basis: 18%;
    align-items: center;
    justify-content: center;
    
    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
    
    /* background-color: ${props => props.theme.secondary}; */
    
    a{
        color: ${props => props.theme.textColorPrimary};

        padding-bottom: 20px;
        cursor: pointer;
        text-transform: capitalize;
        text-align: center;
    }
    img{
        transition: all 0.5s;
    }
    img:hover{
        filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    }
`