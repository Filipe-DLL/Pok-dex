import styled from "styled-components"

export const Container = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Lista = styled.ul`
    width: 98vw;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.8%;

    @media (min-width: 1920px) {
        max-width: 85vw;
    }
`

export const Li = styled.li`
    
    ${ props => props.theme.theme === 'dark' && `
    background: linear-gradient(to bottom, ${props.themes.types[props.type]} 50%, ${props.themes.dark.secondary} 58%);
    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
   `}

    ${ props => props.theme.theme === 'light' && `
    background: linear-gradient(to bottom, ${props.themes.types[props.type]} 50%, ${props.themes.light.secondary} 58%);
    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
   `}

    width: 18%;
    height: 240px;
    max-width: 240px;
    min-width: 240px;
    min-height: 240px;

    margin: 4px 7.5px 15px 7.5px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* flex-basis: 250px; */

    @media (min-width: 1920px) {
        /* width: 13%;  */
        max-width: 312px;
        min-height: 312px;

        /* max-width: 250px; */
        /* min-width: 240px; */
        /* min-height: 240px; */
    }
   
    a{
        color: ${props => props.theme.textColorSecondary};

        padding-bottom: 20px;
        text-transform: capitalize;
        text-align: center;
        cursor: pointer;
    }
    img{
        display: flex;
        height: 180px;
        transition: all 0.5s;
    }
    img:hover{
        filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    }
`