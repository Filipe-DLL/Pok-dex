import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import { Li, Lista } from "./style";


export function Cards(props) {

    const { themes, theme } = useContext(ThemeContext)

    return (
        <div>

            <Lista pokemonsLength={props.pokemons.length}>
                {props.pokemons.map((pokemon) => (
                    <Li key={pokemon.data.name} 
                    themes={themes} 
                    theme={theme}
                    type={pokemon.data.types[0].type.name}>
                        <Link to={`pokemon/${pokemon.data.id}`}>
                            <img src={pokemon.data.sprites.other['official-artwork'].front_default} alt={`imagem do ${pokemon.data.name}`} />
                            <h2>{pokemon.data.name}</h2>
                        </Link>
                    </Li>
                ))}
            </Lista>

        </div>
    )
}