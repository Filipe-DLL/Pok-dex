import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";

import { Container, Li, Lista } from "./style";

export function PokemonCard(props) {

    const { themes, theme } = useContext(ThemeContext)

    return (
        <Container>
            {
                props.pokemons.length === 0 ? <h1>Nenhum Pokémon encontrado.</h1> :
                    <Lista>
                        {
                            props.pokemons.map(pokemon => (
                                <Li key={pokemon.name}
                                    themes={themes}
                                    theme={theme}
                                    type={pokemon.types[0].type.name}>
                                    <Link to={`pokemon/${pokemon.name}`}>
                                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`imagem do ${pokemon.name}`} />
                                        <h2>{pokemon.name}</h2>
                                    </Link>
                                </Li>
                            ))
                        }
                    </Lista>
            }
        </Container>
    )
}