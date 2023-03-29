import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { Li, Lista } from "./style";

export function Card(props) {

    const { theme } = useContext(ThemeContext)

    return (
        <Lista>
            {props.pokemons.map((pokemon) => (
                <Li key={pokemon.data.name} theme={theme} >
                    <Link to={`pokemon/${pokemon.data.id}`}>
                        <img width={200} src={pokemon.data.sprites.front_default} alt={`imagem do ${pokemon.data.name}`} />
                        <h2>{pokemon.data.name}</h2>
                    </Link>
                </Li>
            ))}
        </Lista>
    )
}