import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "../../context/theme-context";
import { getAllPokemons, getPokemons } from "../../services/index";
import ImgPokemon from "../../assets/pokemon.png";

import { Header, HomeContainer } from "./style";

import { LoadMoreButton } from "../../components/Button/LoadMoreButton/LoadMoreButton";
import { ThemeButton } from "../../components/Button/ThemeButton/ThemeButton";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Home() {

    const { theme } = useContext(ThemeContext)

    const [cont, setCont] = useState({ limit: 10, offset: 1 })
    const [allPokemons, setAllPokemons] = useState([])
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getAllPokemons()
            .then(response => setAllPokemons(response))
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        getPokemons(cont)
            .then(response => setPokemons([...pokemons, ...response]))
            .catch(error => console.error(error))
        // eslint-disable-next-line
    }, [cont])

    function pokemonFilter(name) {
        if (name !== '') {
            const filteredPokemons = allPokemons.filter(pokemon => pokemon.name.includes(name))
            const pokemonPromises = filteredPokemons.map(item => axios.get(item.url))
            axios.all(pokemonPromises)
                .then(response => {
                    const filteredPokemonsData = response.map(res => res.data)
                    if (filteredPokemonsData.length === 0) {
                        setPokemons([])
                        console.log('Nenhum Pokémon encontrado.')
                    } else {
                        setPokemons(filteredPokemonsData)
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        } else {
            setCont({ limit: 10, offset: 1 })
            setPokemons([])
            getPokemons(cont)
                .then(response => {
                    setPokemons(response)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }

    function loadMore() {
        //limitar em apenas os Pokemons da primeira geração 
        if (cont.limit >= 151) {
            return
        } else if (cont.limit >= 140) {
            setCont({ limit: 151, offset: 141 })
            return
        }
        // -------------------------------

        setCont(prevCont => ({
            limit: prevCont.limit + 10,
            offset: prevCont.offset + 10
        }))
    }

    return (
        <HomeContainer theme={theme}>
            <Header >
                <img height={'50px'} src={ImgPokemon} alt="POKEMON" />
                <div>
                    <SearchBar pokemonFilter={pokemonFilter} />
                    <ThemeButton />
                </div>
            </Header>
            <PokemonCard pokemons={pokemons} />
            <LoadMoreButton loadMore={loadMore} />
        </HomeContainer>
    )
}