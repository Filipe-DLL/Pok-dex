import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonCarregarMais } from "../Button/ButtonLoadMore/ButtonLoadMore";
import { Card } from "../Card/Card";

export function Cards(props) {

    const [pokemons, setPokemons] = useState([])
    const [cont, setCont] = useState(10)

    useEffect(() => {
        getPokemons(cont)
        // const pika = 'geng'
        // pokemonFilter(pika)
    }, [cont])

    function getPokemons(cont) {
        let linkList = []
        for (let i = 1; i <= cont; i++) {
            linkList.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(linkList.map(link => axios.get(link))).then(response => setPokemons(response))
    }

    function carregarMais() {
        setCont((cont + 100))
    }

    function pokemonFilter(name) {
        let filterPokemons = []
        props.allPokemons.data.results.forEach(element => {
            if (props.allPokemons.data.results.name.includes(name)) {
                filterPokemons.push(element)
                console.log(filterPokemons);
            }
        });
    }

    async function pokemonFilter(name) {
        let filteredPokemons = []
        for (var i in props.allPokemons.data.results) {
            if (props.allPokemons.data.results[i].name.includes(name)) {
                filteredPokemons.push(props.allPokemons.data.results[i])
            }
        }
        axios.all(filteredPokemons.map(item => axios.get(item.url))).then(response => setPokemons(response))
    }

    return (
        <div>
            <Card pokemons={pokemons} />
            < ButtonCarregarMais carregarMais={carregarMais} />
        </div>
    )
}