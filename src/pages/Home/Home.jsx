import { useContext, useEffect, useState } from "react";
import { ButtonTheme } from "../../components/Button/ButtonTheme/ButtonTheme";
import { Cards } from "../../components/Cards/Cards";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ThemeContext } from "../../context/theme-context";
import { Header, HomeContainer } from "./style";
import axios from "axios";

export function Home() {

    const [allPokemons, setAllPokemons] = useState([])

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        getAllPokemons()
    }, [])

    function getAllPokemons() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0').then(response => setAllPokemons(response))
    }

    return (
        <>
            {allPokemons.data && (
                <HomeContainer theme={theme}>
                    <Header>
                        <SearchBar />
                        <ButtonTheme />
                    </Header>
                    <Cards allPokemons={allPokemons} />
                </HomeContainer>
            )}
        </>
    )
}