import styled from 'styled-components';

export const UlMoves = styled.ul`
    width: 100%;
    padding: 10px;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    h1{
        color: #565656;
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        font-size: xx-large;
    }

    li{
        text-transform: capitalize;
        font-size: medium;
        text-align: center;
        min-width: 120px;
        max-width: 33%;
        flex-basis: 33%;
    }

    @media (max-width: 500px) {
    justify-content: center;
    }
`