import { ThemeContext } from "../../context/theme-context";
import { Link } from "react-router-dom";
import { Container, Li, Lista } from "./style";
import { useContext } from "react";
import { useEffect } from "react";


export function Cards(props) {

    const { themes, theme } = useContext(ThemeContext)

    useEffect(() => {
    }, [props.pokemons])

    return (
        <Container>
            {props.pokemons.length === 0 ? <h1>Nenhum Pokémon encontrado.</h1> :
                <Lista>
                    {console.log(props.pokemons)}
                    {
                        props.pokemons.map(pokemon => (
                            <Li key={pokemon.name}
                                themes={themes}
                                theme={theme}
                                type={pokemon.types[0].type.name}>
                                <Link to={`pokemon/${pokemon.id}`}>
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