import { Link } from "react-router-dom";
import { Li, Lista } from "./style";

export function Card(props) {
    console.log(props.pokemons);

    return (
        <Lista>
            {props.pokemons.map((pokemon) => (
                <Li key={pokemon.data.name}>
                    <Link to={`pokemon/${pokemon.data.id}`}>
                        <img width={200} src={pokemon.data.sprites.front_default} alt={`imagem do ${pokemon.data.name}`} />
                        <h2>{pokemon.data.name}</h2>
                    </Link>
                </Li>
            ))}
        </Lista>
    )
}