import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

export function Cards() {

    const [pokemons, setPokemons] = useState([])
    const [cont, setCont] = useState(10)

    function carregarMais() {
        setCont((cont + 10))
    }

    useEffect(() => {
        function getPokemons(cont) {
            let linkList = []
            for (let i = 1; i <= cont; i++) {
                linkList.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            }
            axios.all(linkList.map(link => axios.get(link))).then(response => setPokemons(response))
        }
        getPokemons(cont)
    }, [cont])


    return (
        <>
            <Card pokemons={pokemons} ></Card>
            <Button carregarMais={carregarMais} />
        </>
    )
}