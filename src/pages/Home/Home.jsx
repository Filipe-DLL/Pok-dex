import { getAllPokemons, getPokemons } from "../../services/index";
import { useContext, useEffect, useState } from "react";
import { ButtonTheme } from "../../components/Button/ButtonTheme/ButtonTheme";
import { Cards } from "../../components/Cards/Cards";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ThemeContext } from "../../context/theme-context";
import { Header, HomeContainer } from "./style";
import { ButtonCarregarMais } from "../../components/Button/ButtonLoadMore/ButtonLoadMore";
import ImgPokemon from "../../assets/pokemon.png"
import axios from "axios";

export function Home() {

    const { theme } = useContext(ThemeContext)

    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemons, setPokemons] = useState([])
    const [cont, setCont] = useState(10)

    useEffect(() => {
        getAllPokemons()
            .then(response => setAllPokemons(response))
        getPokemons(cont)
            .then(response => setPokemons(response))
    }, [cont])

    // function getAllPokemons() {
    //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(response => setAllPokemons(response))
    // }

    // function getPokemons(cont) {
    //     let linkList = []
    //     for (let i = 1; i <= cont; i++) {
    //         linkList.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    //     }
    //     setPokemons([])
    //     axios.all(linkList.map(link => axios.get(link))).then(response => setPokemons(response))
    // }

    // function pokemonFilter(name) {
    //     if (name !== '') {
    //         let filteredPokemons = []
    //         for (let i in allPokemons.data.results) {
    //             if (allPokemons.data.results[i].name.includes(name)) {
    //                 filteredPokemons.push(allPokemons.data.results[i])
    //             }
    //         }
    //         axios.all(filteredPokemons.map(item => axios.get(item.url))).then(response => setPokemons(response))
    //     } else {
    //         getPokemons(cont)
    //     }
    // }

    function pokemonFilter(name) {
        if (name !== '') {
            const filteredPokemons = allPokemons.filter(pokemon => pokemon.name.includes(name));
            const pokemonPromises = filteredPokemons.map(item => axios.get(item.url));
            axios.all(pokemonPromises)
                .then(response => {
                    const filteredPokemonsData = response.map(res => res.data);
                    if (filteredPokemonsData.length === 0) {
                        setPokemons([]);
                        console.log('Nenhum Pokémon encontrado.');
                    } else {
                        setPokemons(filteredPokemonsData);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            getPokemons(cont)
                .then(response => {
                    setPokemons(response);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    function carregarMais() {
        if (cont >= 150) {
            setCont((151))
            return
        }
        setCont((cont + 10))
    }

    return (
        <HomeContainer theme={theme}>
            <Header >
                <img height={'50px'} src={ImgPokemon} alt="POKEMON" />
                <div>
                    <SearchBar pokemonFilter={pokemonFilter} />
                    <ButtonTheme />
                </div>
            </Header>
            <Cards pokemons={pokemons} />
            <ButtonCarregarMais carregarMais={carregarMais} />
        </HomeContainer>
    )
}